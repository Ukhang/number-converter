const Footer = () => {

    const date = new Date();

    return (
        <footer className="py-4">
            <p className="text-center text-gray-400"> &copy; copyright {date.getFullYear()} number convetor (Ukhang)</p>
        </footer>
    )
}

export default Footer;