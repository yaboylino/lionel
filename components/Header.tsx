import Logo from "./Logo";
import Link from "next/link";

const links: NavLinks[] = [
    {name: "home", slug: "home"},
    {name: "payroll", slug: "payroll"}
]

const Header = () => (
    <header className="header layout-container dark-theme">
        <Logo/>

        <nav className="header__links button--size-big">
            {links.map((link, index) => (
                <Link key={index} className="header__links__item" href={`/${link.slug}`}>{link.name}</Link>
            ))}
            <a className="button">Hallo</a>
        </nav>
    </header>
)

export default Header
