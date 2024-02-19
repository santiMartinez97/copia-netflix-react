import "../stylesheets/FooterLink.css";

let FooterLink = props => (
    <li className="footer-link">
        <a 
            className="footer-a"
            href={props.link}
        >
            {props.titulo}
        </a>
    </li>
);

export default FooterLink;