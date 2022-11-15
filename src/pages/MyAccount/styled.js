import styled from "styled-components";

export const PageArea = styled.div`
  form {
    margin-top: 20px;
    background-color: #fff;
    border-radius: 25px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
    margin-bottom: 20px;
    max-width: 5000px;

    .area {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 500px;

      .area--title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 14px;
      }

      .area--input {
        flex: 1;

        input {
          width: 100%;
          font-size: 14px;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 10px;
          outline: none;

          &:focus {
            border: 1px solid #333;
            color: #333;
          }
        }

        button {
          background-color: #3a00ff;
          border: 0;
          outline: 0;
          padding: 5px 10px;
          border-radius: 10px;
          color: #fff;
          font-size: 15px;
          cursor: pointer;

          &:hover {
            background-color: #320cb0;
          }
        }
      }
    }
  }

  .card-ad {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
    margin-bottom: 20px;
    max-width: 300px;
  }

  .list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  .area-ad {
    .area--title-ad {
      text-align: right;
      padding-right: 20px;
      padding-left: 20px;
      font-weight: bold;
      font-size: 14px;
    }

    .area--text-ad {
      text-align: right;
      padding-right: 20px;
      padding-left: 20px;
      font-size: 12px;
    }
  }
`;
