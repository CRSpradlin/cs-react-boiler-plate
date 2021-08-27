import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export interface NavElement { name: string, route: string, active: boolean }

const Nav = (props: {elements: NavElement[]}): JSX.Element => {

    const renderNavElements = () => {
        const renderedNavElements: ReactElement[] = []
        props.elements.forEach((element: NavElement, index: number) => {
            renderedNavElements.push(
                <Link onClick={() => updateActive(index)} key={element.name} to={element.route} className={element.active ? "Nav-element-active" : "Nav-element-nonactive"}>
                    {element.name}
                </Link>
            );
        })
        return renderedNavElements
    }
    
    const [renderedElements, setRenderedElements] = useState<ReactElement[]>(renderNavElements())

    const updateActive = (index: number) => {
        for (const element of props.elements) {
            element.active = false;
        }
        props.elements[index].active = true;

        setRenderedElements(renderNavElements())
    }

  return (
    <ul className="Nav">
        {renderedElements}
    </ul>
  );
}

export default Nav;
