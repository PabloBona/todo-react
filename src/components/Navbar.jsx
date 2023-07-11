import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (dropdown && !ref.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [dropdown]);
  return (

    <nav className="row navbar navbar-expand-lg">
      <ul className="col list-unstyled d-flex justify-content-end gap-3 my-3">
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button type="submit" onClick={() => setDropdown((prev) => !prev)}>
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul className="list-unstyled">
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
