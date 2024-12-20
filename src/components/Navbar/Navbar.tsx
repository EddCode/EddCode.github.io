import { useState } from 'preact/hooks';
import style from './Navbar.module.css';

enum MenuItem {
    HOME = 'home',
    ABOUT = 'about',
    SKILLS = 'skills',
    EXPERIENCE = 'experience',
    CONTACT = 'contact',
    BLOG = 'blog'
}

export default function Navbar(prop: { url?: MenuItem }) {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true)
    const [item, setItem] = useState<MenuItem>(prop.url || MenuItem.HOME);

    const toogleMenu = () => {
        console.log('toogleMenu');
        setIsOpenMenu(!isOpenMenu);
    }

    const handleClick = (evt: Event) => {
        const target = evt.currentTarget as HTMLElement;
        setItem(target.getAttribute('data-item') as MenuItem);
        prop.url = target.getAttribute('data-item') as MenuItem;
    }

    return (

        <nav className={style.nav}>
            <div className={`${isOpenMenu ? `${style['nav-content']} ${style.open}` : style['nav-content']}`}>
                <h2 className={style.title}>EDGAR FIGUEROA</h2>
                <div className={ isOpenMenu ? `${style.close} ${style.burger}` : style.burger} onClick={toogleMenu}>
                    <div className={style['btn-line']}></div>
                    <div className={style['btn-line']}></div>
                    <div className={style['btn-line']}></div>
                </div>
                <ListMenu item={item} handleClick={handleClick} isOpen={isOpenMenu}/>
            </div> 
        </nav>
    )
}

const ListMenu = ({ item, handleClick, isOpen}: { isOpen: boolean, item: MenuItem, handleClick: (evt: Event) => void}) => (
    <ul className={isOpen ? style['items-open'] : style.items}>
        <li className={style['nav-item']}>
            <a 
                href="/#home"
                data-item={MenuItem.HOME}
                className={item == MenuItem.HOME ? style['is-active'] : ''}
                onClick={handleClick}
            >
                Home
            </a>
        </li>
        <li className={style['nav-item']}>
            <a 
                href="/#about"
                data-item={MenuItem.ABOUT}
                className={item == MenuItem.ABOUT ? style['is-active'] : ''}
                onClick={handleClick}
            >
                About me
            </a>
        </li>
        <li className={style['nav-item']}>
            <a 
                href="/#skills" 
                data-item={MenuItem.SKILLS}
                className={item == MenuItem.SKILLS ? style['is-active'] : ''}
                onClick={handleClick}
            >
                Skills
            </a>
        </li>
        <li className={style['nav-item']}>
            <a 
                href="/#experience" 
                data-item={MenuItem.EXPERIENCE}
                className={item == MenuItem.EXPERIENCE ? style['is-active'] : ''}
                onClick={handleClick}
            >
                Work Experience
            </a>
        </li>
        <li className={style['nav-item']}>
            <a 
                data-item={MenuItem.BLOG}
                href='/blog'
                className={item == MenuItem.BLOG ? style['is-active'] : ''}
                onClick={handleClick}
            >
                Blog
            </a>
        </li>
    </ul>
)