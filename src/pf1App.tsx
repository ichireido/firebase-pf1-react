import React, { useRef } from 'react';
// import React from 'react';
import './pf1App.css';
// import { Link as LinkScroll } from 'react-scroll';
// import { animateScroll as scroll, scroller } from 'react-scroll';
// import Cofee from './assets/coffee.jpg';
// import Bike from './assets/bike.jpg';
// import Petshop from './assets/petshop.png';
// import Danvc from './assets/danvc.png';
// import Kiryu from './assets/kiryu.jpg';
// import Mc1040hw from './assets/mc1040hw.png';
// import OkkParkingres from './assets/okk_parkingres.png';
import workExperience from '../workExperience.json';
import portfolios from '../portfolios.json';

// import { getStorage, ref } from 'firebase/storage';

// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage();

// Create a storage reference from our storage service
// const storageRef = ref(storage);

// interface work {
//   id: number;
//   title: string;
//   periodStart: string;
//   periodEnd: string;
//   detailList: details[];
// }

// interface pf {
//   id: string;
//   bg: string;
//   txt: string;
//   href: string;
//   imgSrc: string;
//   title: string;
//   detailList: details[];
// }

// interface details {
//   detail: string;
// }

// console.log('storageRef', storageRef);

const pf1App: React.FunctionComponent = () => {
  const linktRef = portfolios.map((val) => {
    return {
      ...val,
      ref: useRef<HTMLDivElement | null>(null),
    };
  });

  const works = workExperience.map((val) => {
    const datailList = val.detailList.map((val, index) => {
      return <li key={index}>{val.detail}</li>;
    });

    return (
      <section key={val.id} className="biosections text-white">
        <h3>【{val.title}】</h3>
        <p className="biodate">
          {val.periodStart} ~ {val.periodEnd}
        </p>
        <ul>{datailList}</ul>
      </section>
    );
  });

  const portfolio = linktRef.map((val, index) => {
    // const idRef = useRef<HTMLDivElement>(null);
    // if (idRef !== null || idRef !== undefined) {
    //   console.log('idRef-', val, ':', idRef.current?.scrollIntoView());
    // }

    const datailList = val.detailList.map((val, index) => {
      return <p key={index}>{val.detail}</p>;
    });

    if (val.id === 'top') {
      return (
        <div
          id={val.id}
          key={val.id}
          className="mainblock prologuetop"
          ref={val.ref}
        >
          {/* <div className="navenpty">
              </div> */}
          <section className="mainblocksection text-white">
            <h1>PORTFOLIO</h1>
          </section>
        </div>
      );
    } else if (val.id === 'bio') {
      return [
        <>
          <div
            id={val.id}
            key={val.id}
            className="mainblock prologuetop"
            ref={val.ref}
          >
            {/* <div className="navenpty">
                </div> */}
            <div className="mainblocksection bg-black">
              <section className="biosection">{works}</section>
            </div>
          </div>
          <div id="heading1" className="mainblock sticky heading">
            {/* <div className="navenpty">
                </div> */}
            <section className="mainblocksection">
              <h2>
                デザイン実績、作品紹介 <br />
                (リンク先に制作物あり)
              </h2>
            </section>
          </div>
        </>,
      ];
    } else {
      return (
        <div
          id={val.id}
          key={val.id}
          className={`mainblock sticky performance${index - 1}`}
          ref={val.ref}
        >
          {/* <div className="navenpty">
                  </div> */}
          <div className={`mainblocksection bg-${val.bg}`}>
            <section className={`tilesection appear-totop text-${val.txt}`}>
              <a className="imglink" href={val.href} target="_new">
                <img className={`site-img performance${index - 1}`} />
              </a>
              <h3 className="sakuhinh3">
                <a href={val.href} target="_new">
                  {val.title}
                </a>
              </h3>
              {datailList}
            </section>
          </div>
        </div>
      );
    }
  });

  console.log('linktRef', linktRef);

  const handleClick = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    console.log('ref-click', ref, linktRef);
    // useEffect(() => {
    //   console.log(ref.current);
    // });

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else return;
    console.log('ref-click-after', ref, linktRef);
  };

  const navList = linktRef.map((val) => {
    return (
      <>
        {/* <LinkScroll
          to={val.id}
          className="nav-link"
          smooth={true}
          duration={850}
        > */}
        {/* <a key={val.id} className="nav-link" href={`#${val.id}`}> */}
        <section
          key={val.id}
          className="nav-link"
          onClick={() => {
            console.log('clicked!');
            handleClick(val.ref);
          }}
        >
          {val.id}
        </section>
        {/* </a> */}
        {/* </LinkScroll> */}
      </>
    );
  });

  // const scrollToQ = (id: string) => {
  //   scroller.scrollTo(id, {
  //     duration: 850,
  //     smooth: true,
  //   });
  // };

  return (
    <div id="wrapper">
      <article id="main">
        <div className="nav">
          <nav className="nav-inner">{navList}</nav>
        </div>
        {portfolio}
        <div id="footer" className="mainblock sticky footer">
          <div className="mainblocksection">
            <footer className="appear-totop">
              <div id="copyright">
                <p>Copyright(C) ichireido All Rights Reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
};

export default pf1App;
