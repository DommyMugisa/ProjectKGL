const profileModal = () => {
  document.getElementById("largeModalprofile").showModal();
};
// const profLink=document.getElementById('profileLink')
// profLink.addEventListener('click', profileModal)
const acctSettingModal = () => {
  document.getElementById("largeModalAccts").showModal();
};


// Validation Add to Inventory
const inventName = () => {
  let addItem = document.addInventory.itemname;

  let lettrLen = addItem.value.length;
  if (lettrLen == 0 || lettrLen < 3 || lettrLen > 15) {
    addItem.focus();
    addItem.style.border = "2px solid red";
    // alert('Item Name Must Be Between 3 and 15 Characters!');
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (addItem.value.match(letters)) {
    return true;
  } else {
    addItem.focus();
    addItem.style.border = "2px solid red";
    // alert('Item Name Must Be Alphabet Only!');
  }
};
const inventType = () => {
  let addType = document.addInventory.itemtype;

  let lettrLen = addType.value.length;
  if (lettrLen == 0 || lettrLen < 3 || lettrLen > 10) {
    addType.focus();
    addType.style.border = "2px solid red";
    // alert('Item Type Must Be Between 3 and 10 Characters!');
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (addType.value.match(letters)) {
    return true;
  } else {
    addType.focus();
    addType.style.border = "2px solid red";
    // alert('Item Type Must Be Alphabet Only!');
  }
};
const inventPurch = () => {
  let addPurchPrc = document.addInventory.purchaseprice;

  let lettrLen = addPurchPrc.value.length;
  if (lettrLen == 0 || lettrLen < 3 || lettrLen > 15) {
    addPurchPrc.focus();
    addPurchPrc.style.border = "2px solid red";
    //   alert('Purchase Price Should be between 3 & 15 Characters!');
    return false;
  }
  let numbers = /^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/;
  if (addPurchPrc.value.match(numbers)) {
    return true;
  } else {
    addPurchPrc.focus();
    addPurchPrc.style.border = "2px solid red";
    // alert('Supplier Name Must Be Alphabet Only!');
  }
};
const inventSell = () => {
  let addSalePrc = document.addInventory.sellingprice;

  let lettrLen = addSalePrc.value.length;
  if (lettrLen == 0 || lettrLen < 5 || lettrLen > 15) {
    addSalePrc.focus();
    addSalePrc.style.border = "2px solid red";
    //   alert('Selling Price Should be between 5 & 15 Characters!');
    return false;
  }
  let numbers = /^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/;
  if (addSalePrc.value.match(numbers)) {
    return true;
  } else {
    addSalePrc.focus();
    addSalePrc.style.border = "2px solid red";
    // alert('Supplier Name Must Be Alphabet Only!');
  }
};
const inventLeadTime = () => {
  let leadTime = document.addInventory.leadtime;

  let lettrLen = leadTime.value.length;
  if (lettrLen == 0 || lettrLen < 3 || lettrLen > 15) {
    leadTime.focus();
    leadTime.style.border = "2px solid red";
    // alert('"Lead Time" should be between 3 & 15 characters!');
    return false;
  }
  let numbers = /^[-\w\s]+$/;
  if (leadTime.value.match(numbers)) {
    return true;
  } else {
    leadTime.focus();
    leadTime.style.border = "2px solid red";
    // alert('"Lead Time" can only contain alphanumerics!');
  }
};
const inventCycleTime = () => {
  let cycleTime = document.addInventory.cycletime;

  let lettrLen = cycleTime.value.length;
  if (lettrLen == 0 || lettrLen < 3 || lettrLen > 15) {
    cycleTime.focus();
    cycleTime.style.border = "2px solid red";
    // alert('"Cycle Time" should be between 3 & 15 characters!');
    return false;
  }
  let numbers = /^[-\w\s]+$/;
  if (cycleTime.value.match(numbers)) {
    return true;
  } else {
    cycleTime.focus();
    cycleTime.style.border = "2px solid red";
    // alert('"Cycle Time" can only contain alphanumerics!');
  }
};
const supplyCateg = () => {
  let suppCat = document.addInventory.supplycategory;

  let lettrLen = suppCat.value;
  if (lettrLen != 1 && lettrLen != 2 && lettrLen != 3) {
    suppCat.focus();
    suppCat.style.border = "2px solid red";
    //   alert('Select a Category from the list!');
    return false;
  }
};
const inventSuppNam = () => {
  let addSupp = document.addInventory.suppliername;

  let lettrLen = addSupp.value.length;
  if (lettrLen == 0 || lettrLen < 3 || lettrLen > 20) {
    addSupp.focus();
    addSupp.style.border = "2px solid red";
    // alert('Supplier Name Must Be Between 3 and 20 Characters!');
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (addSupp.value.match(letters)) {
    return true;
  } else {
    addSupp.focus();
    addSupp.style.border = "2px solid red";
    // alert('Supplier Name Must Be Alphabet Only!');
  }
};

// Validation Login
//the below authorizationDash func would be replaced with routes in the server
// const authorizationDash = () => {
//     let thisAuthor = document.registeruser.authorization;
    
//     let goToDash = thisAuthor.value;
//     if(goToDash = 1){
//         window.location.href = "/creditors.html";
//     }
//     if(goToDash = 2){
//         window.location.href = "#";
//     }
//     if(goToDash = 3){
//         window.location.href = "#";
//     }
// };


//Validation Purchase Order
const produceName = () => {
  let orderItem = document.purchaseorder.producename;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 3 || lettrLen > 15) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Produce Name Must Be Between 3 and 15 Characters!');
    return false;
  }
  let letters = /^[-\w\s]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Produce Name Must Be Alphameric!');
  }
};
const produceType = () => {
  let orderItem = document.purchaseorder.producetype;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 2 || lettrLen > 15) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Produce Type Must Be Between 2 and 15 Characters!');
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Produce Type Must Be Alphabet Only!');
  }
};
const supplierName = () => {
  let orderItem = document.purchaseorder.suppliername;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 2 || lettrLen > 20) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Supplier Name Must Be Between 2 and 20 Characters!');
    return false;
  }
  let letters = /^[-\w\s]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Supplier Name Must Be Alphameric!');
  }
};
const farmLocate = () => {
  let orderItem = document.purchaseorder.farmlocate;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Location Must Be Between 10 and 30 Characters!');
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Location Must Be Alphabet Only!');
  }
};
const dueDelivery = () => {
  let deliver = document.purchaseorder.duedelivery;

  let lettrLen = deliver.value.length;
  if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
    deliver.focus();
    deliver.style.border = "2px solid red";
    // alert('Delivery Due should be between 10 & 30 characters!');
    return false;
  }
};
const producePrice = () => {
  let purchase = document.purchaseorder.purchaseprice;

  let lettrLen = purchase.value.length;
  if (lettrLen == 0 || lettrLen < 5 || lettrLen > 15) {
    purchase.focus();
    purchase.style.border = "2px solid red";
    //   alert('Purchase Price Should be between 5 & 15 Characters!');
    return false;
  }
  let numbers = /^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/;
  if (purchase.value.match(numbers)) {
    return true;
  } else {
    purchase.focus();
    purchase.style.border = "2px solid red";
    // alert('');
  }
};
const produceQty = () => {
  let tonnageKgs = document.purchaseorder.quantity;

  let lettrLen = tonnageKgs.value.length;
  if (lettrLen == 0 || lettrLen < 3 || lettrLen > 15) {
    tonnageKgs.focus();
    tonnageKgs.style.border = "2px solid red";
    //   alert('');
    return false;
  }
  let numbers = /^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/;
  if (tonnageKgs.value.match(numbers)) {
    return true;
  } else {
    tonnageKgs.focus();
    tonnageKgs.style.border = "2px solid red";
    // alert('');
  }
};
const supplierContact = () => {
  let contact = document.purchaseorder.suppliercontact;

  let lettrLen = contact.value.length;
  if (lettrLen != 10) {
    contact.focus();
    contact.style.border = "2px solid red";
    //   alert('Contact must be 10 Characters!');
    return false;
  }
  let numbers = /^[0-9]*$/;
  if (contact.value.match(numbers)) {
    return true;
  } else {
    contact.focus();
    contact.style.border = "2px solid red";
    // alert('Contact Must Be Alphabet Only!');
  }
};
const farmContact = () => {
  let contact = document.purchaseorder.farmcontact;

  let lettrLen = contact.value.length;
  if (lettrLen != 10) {
    contact.focus();
    contact.style.border = "2px solid red";
    //   alert('Contact must be 10 Characters!');
    return false;
  }
  let numbers = /^[0-9]*$/;
  if (contact.value.match(numbers)) {
    return true;
  } else {
    contact.focus();
    contact.style.border = "2px solid red";
    // alert('Contact Must Be Numeric Only!');
  }
};


  //Validation Cash Sales
  const saleName = () => {
    let orderItem = document.cashsales.producename;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 3 || lettrLen > 15) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
      return false;
    }
    let letters = /^[-\w\s]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
  };
  const saleType = () => {
    let orderItem = document.cashsales.producetype;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 2 || lettrLen > 15) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
      return false;
    }
    let letters = /^[A-Za-z]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
  };
  const saleQty = () => {
    let tonnageKgs = document.cashsales.salequantity;
  
    let lettrLen = tonnageKgs.value.length;
    if (lettrLen == 0 || lettrLen < 3 || lettrLen > 15) {
      tonnageKgs.focus();
      tonnageKgs.style.border = "2px solid red";
      //   alert('');
      return false;
    }
    let numbers = /^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/;
    if (tonnageKgs.value.match(numbers)) {
      return true;
    } else {
      tonnageKgs.focus();
      tonnageKgs.style.border = "2px solid red";
      // alert('');
    }
  };
  const salePrice = () => {
    let addSalePrc = document.cashsales.sellingprice;
  
    let lettrLen = addSalePrc.value.length;
    if (lettrLen == 0 || lettrLen < 5 || lettrLen > 15) {
      addSalePrc.focus();
      addSalePrc.style.border = "2px solid red";
      //   alert('Selling Price Should be between 5 & 15 Characters!');
      return false;
    }
    let numbers = /^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/;
    if (addSalePrc.value.match(numbers)) {
      return true;
    } else {
      addSalePrc.focus();
      addSalePrc.style.border = "2px solid red";
      // alert('');
    }
  };
  const dateOfSale = () => {
    let deliver = document.cashsales.dateofsale;
  
    let lettrLen = deliver.value.length;
    if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
      deliver.focus();
      deliver.style.border = "2px solid red";
      // alert('');
      return false;
    }
  };
  const buyerName = () => {
    let orderItem = document.cashsales.buyername;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 2 || lettrLen > 20) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
      return false;
    }
    let letters = /^[-\w\s]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
  };
  const buyerContact = () => {
    let contact = document.cashsales.buyercontact;
  
    let lettrLen = contact.value.length;
    if (lettrLen != 10) {
      contact.focus();
      contact.style.border = "2px solid red";
      //   alert('');
      return false;
    }
    let numbers = /^[0-9]*$/;
    if (contact.value.match(numbers)) {
      return true;
    } else {
      contact.focus();
      contact.style.border = "2px solid red";
      // alert('');
    }
  };
  const saleStat = () => {
    let suppCat = document.cashsales.salecategory;
  
    let lettrLen = suppCat.value;
    if (lettrLen != 1) {
      suppCat.focus();
      suppCat.style.border = "2px solid red";
      //   alert('');
      return false;
    }
  };
  const salesAgent = () => {
    let orderItem = document.cashsales.saleagent;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 2 || lettrLen > 15) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('Produce Type Must Be Between 2 and 15 Characters!');
      return false;
    }
    let letters = /^[A-Za-z]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('Produce Type Must Be Alphabet Only!');
    }
  };


  //Validation Credit Sales
  const credSaleName = () => {
    let orderItem = document.creditsales.producename;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 3 || lettrLen > 15) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
      return false;
    }
    let letters = /^[-\w\s]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
  };
  const credSaleType = () => {
    let orderItem = document.creditsales.producetype;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 2 || lettrLen > 15) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
      return false;
    }
    let letters = /^[A-Za-z]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
  };
  const credSaleQty = () => {
    let tonnageKgs = document.creditsales.salequantity;
  
    let lettrLen = tonnageKgs.value.length;
    if (lettrLen == 0 || lettrLen < 3 || lettrLen > 15) {
      tonnageKgs.focus();
      tonnageKgs.style.border = "2px solid red";
      //   alert('');
      return false;
    }
    let numbers = /^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/;
    if (tonnageKgs.value.match(numbers)) {
      return true;
    } else {
      tonnageKgs.focus();
      tonnageKgs.style.border = "2px solid red";
      // alert('');
    }
  };
  const credSalePrice = () => {
    let addSalePrc = document.creditsales.sellingprice;
  
    let lettrLen = addSalePrc.value.length;
    if (lettrLen == 0 || lettrLen < 5 || lettrLen > 15) {
      addSalePrc.focus();
      addSalePrc.style.border = "2px solid red";
      //   alert('Selling Price Should be between 5 & 15 Characters!');
      return false;
    }
    let numbers = /^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/;
    if (addSalePrc.value.match(numbers)) {
      return true;
    } else {
      addSalePrc.focus();
      addSalePrc.style.border = "2px solid red";
      // alert('');
    }
  };
  const credDateOfSale = () => {
    let deliver = document.creditsales.dateofsale;
  
    let lettrLen = deliver.value.length;
    if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
      deliver.focus();
      deliver.style.border = "2px solid red";
      // alert('');
      return false;
    }
  };
  const credDueDate = () => {
    let deliver = document.creditsales.duedate;
  
    let lettrLen = deliver.value.length;
    if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
      deliver.focus();
      deliver.style.border = "2px solid red";
      // alert('');
      return false;
    }
  };
const credBuyerName = () => {
    let orderItem = document.creditsales.buyername;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 2 || lettrLen > 20) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
      return false;
    }
    let letters = /^[-\w\s]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
};
  const credBuyerContact = () => {
    let contact = document.creditsales.buyercontact;
  
    let lettrLen = contact.value.length;
    if (lettrLen != 10) {
      contact.focus();
      contact.style.border = "2px solid red";
      //   alert('');
      return false;
    }
    let numbers = /^[0-9]*$/;
    if (contact.value.match(numbers)) {
      return true;
    } else {
      contact.focus();
      contact.style.border = "2px solid red";
      // alert('');
    }
  };
  const credSaleStat = () => {
    let suppCat = document.creditsales.salecategory;
  
    let lettrLen = suppCat.value;
    if (lettrLen != 1) {
      suppCat.focus();
      suppCat.style.border = "2px solid red";
      //   alert('');
      return false;
    }
  };
  const credSalesAgent = () => {
    let orderItem = document.creditsales.saleagent;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 2 || lettrLen > 15) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
      return false;
    }
    let letters = /^[A-Za-z]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
  };
  const credBuyerLocate = () => {
    let orderItem = document.creditsales.location;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 2 || lettrLen > 30) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
      return false;
    }
    let letters = /^[-\w\s]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
  };
  const credBuyerNIN = () => {
    let orderItem = document.creditsales.nin;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen != 14) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('Invalid NIN!');
      return false;
    }
    let letters = /^[A-Z0-9]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
  };


  //Validation Add Supplier (+Add Creditor)
  const supplierFirstName = () => {
    let orderItem = document.addsupplier.firstname;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 2 || lettrLen > 10) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
      return false;
    }
    let letters = /^[A-Za-z]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
};
  const supplierSur = () => {
    let orderItem = document.addsupplier.surname;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 2 || lettrLen > 15) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
      return false;
    }
    let letters = /^[A-Za-z]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
};
const supplierCateg = () => {
  let suppCat = document.addsupplier.category;

  let lettrLen = suppCat.value;
  if (lettrLen != 1 && lettrLen != 2) {
    suppCat.focus();
    suppCat.style.border = "2px solid red";
    //   alert('Select a Category from the list!');
    return false;
  }
};
  const supplierBizName = () => {
    let orderItem = document.addsupplier.business;
  
    let lettrLen = orderItem.value.length;
    if (lettrLen == 0 || lettrLen < 2 || lettrLen > 20) {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
      return false;
    }
    let letters = /^[-\w\s]+$/;
    if (orderItem.value.match(letters)) {
      return true;
    } else {
      orderItem.focus();
      orderItem.style.border = "2px solid red";
      // alert('');
    }
};
const supplierTelephone = () => {
  let contact = document.addsupplier.telephone;

  let lettrLen = contact.value.length;
  if (lettrLen != 10) {
    contact.focus();
    contact.style.border = "2px solid red";
    //   alert('');
    return false;
  }
  let numbers = /^[0-9]*$/;
  if (contact.value.match(numbers)) {
    return true;
  } else {
    contact.focus();
    contact.style.border = "2px solid red";
    // alert('');
  }
};
const supplierBizTel = () => {
  let contact = document.addsupplier.businesstelephone;

  let lettrLen = contact.value.length;
  if (lettrLen != 10) {
    contact.focus();
    contact.style.border = "2px solid red";
    //   alert('');
    return false;
  }
  let numbers = /^[0-9]*$/;
  if (contact.value.match(numbers)) {
    return true;
  } else {
    contact.focus();
    contact.style.border = "2px solid red";
    // alert('');
  }
};
const supplierEmail = () => {
  let orderItem = document.addsupplier.email;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 2 || lettrLen > 30) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
};
const supplierBizEmail = () => {
  let orderItem = document.addsupplier.businessemail;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 2 || lettrLen > 30) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
};
const supplierAddress = () => {
  let orderItem = document.addsupplier.physicaladdress;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
};
const supplierBizAddr = () => {
  let orderItem = document.addsupplier.physicaladdress2;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
};
const supplierNIN = () => {
  let orderItem = document.addsupplier.nin;

  let lettrLen = orderItem.value.length;
  if (lettrLen != 14) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Invalid NIN!');
    return false;
  }
  let letters = /^[A-Z0-9]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
  }
};
const supplierTIN = () => {
  let orderItem = document.addsupplier.tin;

  let lettrLen = orderItem.value.length;
  if (lettrLen != 14) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Invalid NIN!');
    return false;
  }
  let letters = /^[A-Z0-9]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
  }
};


// Trial validation for optional supplier form enterprise
// const creditorBizName = () => {
//   let bizName = document.addcreditor.credbusiness;
//   let bizNameLen = bizName.value.length;

//   let bizCat = document.addcreditor.credcategory;
//   let bizCatVal = bizCat.value;

//   if (bizCatVal != 2 && bizNameLen < 2) {
//     bizName.focus();
//     bizName.style.border = "2px solid red";
//     //   alert('Select a Category from the list!');
//     return false;
//   }
//   let letters = /^[-\w\s]+$/;
//   if (bizName.value.match(letters)) {
//     return true;
//   } else {
//     bizName.focus();
//     bizName.style.border = "2px solid red";
//     // alert('');
//   }
// };
// const creditorCateg = () => {
//   let bizCat = document.addcreditor.credcategory;

//   let bizCatVal = bizCat.value;
//   if (bizCatVal != 1 && bizCatVal != 2) {
//     bizCat.focus();
//     bizCat.style.border = "2px solid red";
//     //   alert('Select a Category from the list!');
//     return false;
//   }
// };


//Validation Edit Profile
const profileName = () => {
  let orderItem = document.editprofile.fullname;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 2 || lettrLen > 20) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
  }
};
const profileAbout = () => {
  let orderItem = document.editprofile.about;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 20 || lettrLen > 100) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
  let letters = /^(?!\d+$)[a-zA-Z0-9 @&$]*$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
  }
};
const profileCompany = () => {
  let orderItem = document.editprofile.company;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 25 || lettrLen > 35) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
  }
};
const profileRole = () => {
  let orderItem = document.editprofile.job;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 2 || lettrLen > 15) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
  }
};
const profileCountry = () => {
  let orderItem = document.editprofile.country;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 2 || lettrLen > 15) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
  }
};
const profileAddress = () => {
  let orderItem = document.editprofile.address;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
};
const profilePhone = () => {
  let contact = document.editprofile.phone;

  let lettrLen = contact.value.length;
  if (lettrLen != 10) {
    contact.focus();
    contact.style.border = "2px solid red";
    //   alert('');
    return false;
  }
  let numbers = /^[0-9]*$/;
  if (contact.value.match(numbers)) {
    return true;
  } else {
    contact.focus();
    contact.style.border = "2px solid red";
    // alert('');
  }
};
const profileEmail = () => {
  let orderItem = document.editprofile.email;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
};


//Validation Create Profile (Director)
const firstName = () => {
  let orderItem = document.createprofile.firstname;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 2 || lettrLen > 15) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
  }
};
const surName = () => {
  let orderItem = document.createprofile.surname;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 2 || lettrLen > 15) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
  }
};
const userTel = () => {
  let contact = document.createprofile.telephone;

  let lettrLen = contact.value.length;
  if (lettrLen != 10) {
    contact.focus();
    contact.style.border = "2px solid red";
    //   alert('');
    return false;
  }
  let numbers = /^[0-9]*$/;
  if (contact.value.match(numbers)) {
    return true;
  } else {
    contact.focus();
    contact.style.border = "2px solid red";
    // alert('');
  }
};
const userMail = () => {
  let orderItem = document.createprofile.email;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
};
const userAddr = () => {
  let orderItem = document.createprofile.address1;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
};
const userAddr2 = () => {
  let orderItem = document.createprofile.address2;

  let lettrLen = orderItem.value.length;
  if (lettrLen == 0 || lettrLen < 10 || lettrLen > 30) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
    return false;
  }
};
const userNIN = () => {
  let orderItem = document.createprofile.nin;

  let lettrLen = orderItem.value.length;
  if (lettrLen != 14) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Invalid NIN!');
    return false;
  }
  let letters = /^[A-Z0-9]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
  }
};
const userTIN = () => {
  let orderItem = document.createprofile.tin;

  let lettrLen = orderItem.value.length;
  if (lettrLen != 14) {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('Invalid NIN!');
    return false;
  }
  let letters = /^[A-Z0-9]+$/;
  if (orderItem.value.match(letters)) {
    return true;
  } else {
    orderItem.focus();
    orderItem.style.border = "2px solid red";
    // alert('');
  }
};


//Validation user Login+Register
const userAuthorLogin = () => {
  let suppCat = document.userlogin.authorization;

  let lettrLen = suppCat.value;
  if (lettrLen != 1 && lettrLen != 2 && lettrLen != 3) {
    suppCat.focus();
    suppCat.style.border = "2px solid red";
    //   alert('Select a Category from the list!');
    return false;
  }
};
const userAuthorReg = () => {
  let suppCat = document.registeruser.authorization;

  let lettrLen = suppCat.value;
  if (lettrLen != 1 && lettrLen != 2 && lettrLen != 3) {
    suppCat.focus();
    suppCat.style.border = "2px solid red";
    //   alert('Select a Category from the list!');
    return false;
  }
};
const userPassLogin = () =>{
  let password = document.userlogin.password;
  let passLen = password.value.length;
  if (passLen == 0 || passLen < 8 || passLen > 15){
    password.focus();
    password.style.border = "2px solid red";
    // alert('');
  }
};
const userNamLogin = () =>{
  let username = document.userlogin.username;
  let nameLen = username.value.length;
  if (nameLen == 0 || passLen < 5 || passLen > 25){
    username.focus();
    username.style.border = "2px solid red";
    // alert('');
  }
};
const userPassReg = () =>{
  let password = document.registeruser.password;
  let passLen = password.value.length;
  if (passLen == 0 || passLen < 8 || passLen > 15){
    password.focus();
    password.style.border = "2px solid red";
    // alert('');
  }
};
const userNamReg = () =>{
  let username = document.registeruser.username;
  let nameLen = username.value.length;
  if (nameLen == 0 || nameLen < 5 || nameLen > 25){
    username.focus();
    username.style.border = "2px solid red";
    // alert('');
  }
};
const userFullNamReg = () =>{
  let username = document.registeruser.fullname;
  let nameLen = username.value.length;
  if (nameLen == 0 || nameLen < 10 || nameLen > 25){
    username.focus();
    username.style.border = "2px solid red";
    // alert('');
  }
  let letters = /^[A-Za-z]+$/;
  if (username.value.match(letters)) {
    return true;
  } else {
    username.focus();
    username.style.border = "2px solid red";
    // alert('');
  }
};