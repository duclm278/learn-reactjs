import "./App.css";

// Menu, Content & Ads
export default function App() {
  return (
    <div className="container">
      <div className="menu">
        <div className="menu-item">HOME</div>
        <div className="menu-item">Reports</div>
        <div className="menu-item">Products</div>
      </div>
      <div className="content">
        <p>
          Computer science is the study of computation, automation, and
          information.[1] Computer science spans theoretical disciplines (such
          as algorithms, theory of computation, information theory, and
          automation) to practical disciplines (including the design and
          implementation of hardware and software).[2][3][4] Computer science is
          generally considered an area of academic research and distinct from
          computer programming.[5]
        </p>
        <p>
          Algorithms and data structures are central to computer science.[6] The
          theory of computation concerns abstract models of computation and
          general classes of problems that can be solved using them. The fields
          of cryptography and computer security involve studying the means for
          secure communication and for preventing security vulnerabilities.
          Computer graphics and computational geometry address the generation of
          images.
        </p>
      </div>
      <div className="advertisement">
        <div className="advertisement-item">Adv. 1</div>
        <div className="advertisement-item">Adv. 2</div>
        <div className="advertisement-item">Adv. 3</div>
      </div>
    </div>
  );
}
