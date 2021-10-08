import React  from 'react';
import client from "../apollo-client";
import { gql } from "@apollo/client";
//
function Test() {
  const getItems =async function(){
    const data = await client.query({
      query: gql`
      query {
        tasks {
          id
          title
        }
      }
      `,
      fetchPolicy: "network-only"
    });
console.log(data);
  }
  getItems();  
  return (
    <div className="container py-2">
      <h3>Test 22</h3>
    </div>
  );
}
export default Test;
