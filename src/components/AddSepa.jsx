import { useState } from "react";
import axios from "axios";

import React from 'react';

function AddSepa  (props){
  const handleDownload = () => {
      const downloadUrl = 'https://www.europeanpaymentscouncil.eu/document-library/other/sepa-direct-debit-mandate-template';
    window.open(downloadUrl); 
   };

  return (
    <div>
      <h1>Download Form</h1>

      <button onClick={handleDownload}>Download Sepe</button>
    </div>
  );
};

export default AddSepa;
