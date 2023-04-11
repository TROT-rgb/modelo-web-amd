import "./index.css";
import React, { useContext } from "react";
import { deleteIcon } from "../../Provider";
import { UserContext } from "../../Context/UserContext";
import { FirebaseContext } from "../../Context/FirebaseContext";

export default function News({ prop }) {
  const [user] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const deleteNew = async (id) => {
    await firebase.deleteNews(id);
  };
  return (
    <React.Fragment>
      {prop !== undefined
        ? prop.map((value, index) => {
          if (!value.community) {
            return (
              <div style={{margin:20}} className="cube-desing-long">
                <div className="news-lay d-flex flex-column">
                  <div className="news-module d-flex">
                    <div className="img-news-case">
                      <a href={value.link} target="__blank">
                        <img
                          src={value.image}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          alt="banner"
                        />
                      </a>
                    </div>
                    {user.admin ? (
                      <button
                        className="delete-case"
                        onClick={() => {
                          deleteNew(value.id);
                        }}
                      >
                        <img
                          className="delete-icon"
                          src={deleteIcon}
                          alt="deleteIcon"
                        />
                      </button>
                    ) : null}
                  </div>

                  <div className="text-news">
                    <h1>{value.title}</h1>

                    <pre>{value.description}</pre>
                  </div>
                  <div style={{ alignSelf: "center", marginTop: 20 }}>
                    <a
                      href={value.link}
                      target="__blank"
                      className="btn-link"
                    >
                      {value.link}
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })
        : null}
    </React.Fragment>
  );
}
