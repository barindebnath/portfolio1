import React from "react";

export const Nav = () => {
  const arr = ["Project", "Skill", "Experience", "Education", "About"];
  const handleClick = (e, k) => {
    const id = String(k);
    var ul = e.target.parentElement.parentElement;
    var li;
    for (var i = 0; i < ul.childNodes.length; i++) {
      li = ul.childNodes[i];
      if (li.id === id) {
        li.childNodes[0].classList.add("active");
      } else {
        li.childNodes[0].classList.remove("active");
      }
    }
  };
  return (
    <nav id="navbar" className="fixed-bottom navbar px-0 navbar-light bg-white navbar-expand bd-navbar border-top">
      <div className="navbar-nav-scroll mx-auto">
        <ul className="navbar-nav bd-navbar-nav flex-row">
          {arr.map((item, i) => (
            <li key={i} id={i} className="nav-item" onClick={(e) => handleClick(e, i)}>
              <a className="nav-link" href={"#" + item}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
