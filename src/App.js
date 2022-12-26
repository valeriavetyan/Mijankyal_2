import React, { useState } from "react";
import { Button, Grid } from "@mui/material";

import "./App.css";

const App = (props) => {
  const [select, setSelect] = useState();
  const [anun, setAnun] = useState("");
  const [azganun, setAzganun] = useState("");
  const [matem, setMatem] = useState("");
  const [fizika, setFizika] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [tableFlag, setTableFlag] = useState(false);
  const [dimords, setDimords] = useState([]);

  const getValueFromradio = (e) => {
    setRadioValue(e.target.value);
  };

  const user = {
    anun: anun,
    azganun: azganun,
    matem: matem,
    fizika: fizika,
    fakultet: select,
    arkaHeraka: radioValue,
  };

  const mutq = () => {
    setDimords((prevArray) => [...prevArray, user]);
  };

  const cuycTalDimordnerin = () => {
    setTableFlag(true);
  };

  return (
    <div
      style={{
        padding: "50px",
        height: "100vh",
        width: "100%",
        backgroundColor: "#8BC6EC",
        backgroundImage: `linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "200px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            width: "300px",
            objectPosition: "center",
            height: "100%",
          }}
          src="https://media.istockphoto.com/id/1332353096/photo/businessman-hand-showing-check-mark-on-city-background.jpg?b=1&s=170667a&w=0&k=20&c=5g6VjqQjJWlqEGmQTwcOOEgOrNny2UMzw2sMFeiOwV4="
        />
        <h1>Dimordner</h1>
        <h1></h1>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid
            item
            xs={7}
            container
            direction="row"
            style={{ height: "400px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div>
                <label>Anun</label>
                <input value={anun} onChange={(e) => setAnun(e.target.value)} />
              </div>
              <div>
                <label>Azganun</label>
                <input
                  value={azganun}
                  onChange={(e) => setAzganun(e.target.value)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <select
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option></option>
                <option>IKM</option>
                <option>Fizika</option>
                <option>Mathem</option>
              </select>
              <div onChange={getValueFromradio}>
                <input type="radio" id="arka" name="age" value="arka" />
                <label for="arka">arka</label>
                {" --- "}
                <input type="radio" id="heraka" name="age" value="heraka" />
                <label for="heraka">heraka</label>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div>
                <label>Math</label>
                <input
                  value={matem}
                  onChange={(e) => setMatem(e.target.value)}
                />
              </div>
              <div>
                <label>Fizika</label>
                <input
                  value={fizika}
                  onChange={(e) => setFizika(e.target.value)}
                />
              </div>
            </div>
            <Button
              onClick={mutq}
              style={{
                textAlign: "left",
                background: "navy",
                color: "white",
                height: "50px",
                padding: "0px 30px",
              }}
            >
              Mutq
            </Button>
            <Button
              onClick={cuycTalDimordnerin}
              style={{
                textAlign: "left",
                background: "navy",
                color: "white",
                height: "50px",
                padding: "0px 30px",
                width: "100%",
              }}
            >
              Yndunvac dimordneri qanaky
            </Button>
          </Grid>

          <Grid
            item
            container
            xs={12}
            direction="row"
            style={{
              height: "400px",
              paddingLeft: "50px",
              justifyContent: "center",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Yndunvac dimordneri cank</h1>
            <table>
              <tr>
                <th>Anun Azganun</th>
                <th>Fakultet</th>
                <th>Usucman dzev</th>
                <th>Miavorneri gumar</th>
              </tr>
              {tableFlag &&
                dimords.map((el) => {
                  return (
                    Number(+el.matem + +el.fizika) > 25 && (
                      <tr>
                        <td>
                          {el.anun} {el.azganun}
                        </td>
                        <td>{el.fakultet}</td>
                        <th>{el.arkaHeraka}</th>
                        <td>{Number(+el.matem + +el.fizika)}</td>
                      </tr>
                    )
                  );
                })}
            </table>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default App;
