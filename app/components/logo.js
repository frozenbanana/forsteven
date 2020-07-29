const Logo = () => {
  return (
    <div>
        <h1>Steven</h1>
        <p>software engineer</p>
      <style jsx>{`
            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                color: #204D76;
                width: 20rem;
                cursor: pointer;
                margin: 0.5rem 1rem;
            }

            div h1 {
                font-size: 2.8rem;
                font-family: Radley, sans-serif !important;
                font-weight: 500;
                margin: 0 auto;
                margin-bottom: 5px;
                text-transform: uppercase;
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
