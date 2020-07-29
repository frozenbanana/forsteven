const Logo = () => {
  return (
    <div className="shadowed-light">
        <h1>henry bergström</h1>
        <p>software engineer</p>
      <style jsx>{`
            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 20rem;
                cursor: pointer;
                margin: 0.5rem 1rem;
            }

            div h1 {
                font-size: 2.8rem;
                font-weight: 500;
                margin: 0 auto;
                margin-bottom: 5px;
                letter-spacing: 1.5px;
            }

            div p {
                font-size: 1.2rem;
                letter-spacing: 2px;
                margin: 0 auto;
            }
          `}
      </style>
    </div>
  );
};

export default Logo;
