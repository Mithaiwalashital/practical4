const product = [
    {
        product_id : '1',
        title : 'Pen',
        price : '2',
        category : ['stationary'],
        company_id : '1',
        seller_id : ['1'],
    },
    {
        product_id : '2',
        title : 'Shampoo',
        price : '200',
        category : ['cosmetics'],
        company_id : '2',
        seller_id : ['2'],
    },
    {
        product_id : '3',
        title : 'Mobile',
        price : '15000',
        category : ['electronic'],
        company_id : '3',
        seller_id : ['3'],
    },
    {
        product_id : '4',
        title : 'Shampoo',
        price : '200',
        category : ['cosmetics'],
        company_id : '4',
        seller_id : ['2'],
    },
  ];
  const company = [
    {
        company_id : '1',
        name : 'Cello' ,
        product_ids :['1'],
    },
    {   
        company_id : '2',
        name : 'Treshmee' ,
        product_ids :['2'],
    },
    {
        company_id : '3',
        name : 'Samsung' ,
        product_ids :['3'],
    },
    {   
        company_id : '4',
        name : 'Panteen' ,
        product_ids :['2'],
    },
  ];
  const seller = [
    {
        seller_id : '1',
        name : 'shital',
        product_ids : ['1'],

    },
    {   
        seller_id : '2',
        name : 'nishi',
        product_ids : ['2'],
    },
    {
        seller_id : '3',
        name : 'sona',
        product_ids : ['3'],
    },
  ];
  
  module.exports = {company, product, seller};