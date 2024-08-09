


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

function Main() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const endpoints = [
    "https://api.spotify.com/v1/browse/categories/toplists/playlists",
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists",
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists",
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists",
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists",
  ];

  useEffect(() => {
    if (!token) {
      setError(new Error("Token is missing"));
      return;
    }

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          endpoints.map((url) =>
            fetch(url, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }).then((res) => {
              if (!res.ok) {
                throw new Error("Network response was not ok");
              }
              return res.json();
            })
          )
        );
        const combinedData = responses.flatMap((res) =>
          res.playlists.items.slice(0, 6)
        );
        setData(combinedData);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [token]);

  const navigate = useNavigate();

  function handleRedirect(id) {
    navigate(`playlist/${id}`);
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  if (data.length === 0) {
    return <h1>Loading...</h1>;
  }

  const MainContainer = styled.div`
    width: 100%;
    padding: 0 6px;
    background-color: #121212;

    @media (max-width: 1024px) {
      padding: 0 4px;
    }

    @media (max-width: 768px) {
      padding: 0 2px;
    }
  `;

  const ItemContainer = styled.div`
    gap: 4px;
    width: 224px;
    cursor: pointer;

    @media (max-width: 1024px) {
      width: 200px;
    }

    @media (max-width: 768px) {
      width: 150px;
    }
  `;

  const Card = styled.div`
    width: 100%;
    padding: 5px;
    border-radius: 8px;
    height: 324px;
    background-color: #1b1b1b;
    color: #b3b3b3;
    text-align: center;

    @media (max-width: 768px) {
      height: auto;
    }
  `;

  return (
    <MainContainer className="relative mb-[22px]">
      <div className="justify-center mx-auto relative gap-10 flex flex-wrap pt-[100px]">
        {data.map((el, index) => (
          <ItemContainer key={index} onClick={() => handleRedirect(el.id)}>
            <Card>
              <img
                src={el.images[0].url}
                alt={el.name}
                className="w-[182px] h-[182px] rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <h1 className="text-[16px] text-white">{el.name}</h1>
              <span className="text-[12px]">{el.description}</span>
            </Card>
          </ItemContainer>
        ))}
      </div>
    </MainContainer>
  );
}

export default Main;
