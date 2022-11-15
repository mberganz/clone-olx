import styled from "styled-components";

export const NotFoundArea = styled.div`
  background-color: #999;

  .conteudo {
    display: flex;
    height: 400px;

    .botao {
      width: 200px;
      height: 50px;
      line-height: 30px;
      display: flex;
      margin-top: 300px;
      margin-right: 30px;
      margin-left: auto;

      a {
        text-decoration: none;
        padding: 10px 20px;
        background-color: #ba55d3;
        border-radius: 25px;
        border: 1px solid #4b0082;
        color: #fff;
        transition: all ease 0.4s;

        &:hover {
          background-color: #4b0082;
          border: 1px solid #ba55d3;
        }
      }
    }
  }
`;
