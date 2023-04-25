function openTab(table,id){
    var i, tabcontent, tablinks;
    if (id == 1) {
        document.getElementById("2").style.borderBottomColor = "white";
        document.getElementById("0").style.borderBottomColor = "white";
        document.getElementById("3").style.borderBottomColor = "white";
    } else if (id == 2) {
        document.getElementById("1").style.borderBottomColor = "white";
        document.getElementById("0").style.borderBottomColor = "white";
        document.getElementById("3").style.borderBottomColor = "white";

    } else if (id == 3) {
        document.getElementById("1").style.borderBottomColor = "white";
        document.getElementById("2").style.borderBottomColor = "white";
        document.getElementById("0").style.borderBottomColor = "white";

    } else {
        document.getElementById("1").style.borderBottomColor = "white";
        document.getElementById("2").style.borderBottomColor = "white";
        document.getElementById("3").style.borderBottomColor = "white";
    }
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(table).style.display = "inline-block";
}

function GetUserData() {
    let code = `<h5>USERS</h5>
    <button type='button' class='btn btn-primary' data-bs-toggle='modal' onclick='ShowUsersTableModal()' data-bs-target='#EditUserModal' >Add User</button>

    <table>
    <thead>
        <th>User Id</th>
        <th>User Name</th>
        <th>Email Address</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Actions</th>
    </thead><tbody>`

    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': 'SELECT * FROM USERS'},
        success: function(result) {
            console.log(result)
            for(var row of result.data)
            {   
                code+="<tr>";
                code+="<td>"+row?.Id+"</td>";
                code+="<td>"+row?.Name+"</td>";
                code+="<td>"+row?.Email+"</td>";
                code+="<td>"+row?.Address+"</td>";
                code+="<td>"+row?.Phone+"</td>";
                code+=`<td><span data-bs-toggle='modal' data-bs-target='#EditUserModal' onClick="ShowUsersTableModal('Update','${row?.Id}','${row?.Name}','${row?.Email}','${row?.Address}','${row?.Phone}')"><i  style='margin-right:5px;' class='fa-solid fa-pen-to-square'></i> </span><i class='fa-solid fa-trash' onclick="Delete_Record('USERS','${row?.Id}')"></i></td>`
                code+="</tr>";
            }
            code += `</tbody>
            </table>`
            // console.log(code)
            $("#Users_table").html(code);
        },
        error: function(err) {
          console.log(err);
        }
      });
}

function GetOrdersData() {
    let code = `<h5>Product Orders</h5>
    <button type='button' class='btn btn-primary' data-bs-toggle='modal' onclick='ShowOrdersTableModal()' data-bs-target='#EditUserModal' >Add Order</button>

    <table>
    <thead>
        <th>Order Id</th>
        <th>User Id</th>
        <th>Order_Price</th>
        <th>placed_date</th>
        <th>Actions</th>
    </thead><tbody>`

    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': 'SELECT * FROM Orders'},
        success: function(result) {
            console.log(result)
            for(var row of result.data)
            {   
                code+="<tr>";
                code+="<td>"+row?.Id+"</td>";
                code+="<td>"+row?.UserId+"</td>";
                code+="<td>"+row?.Price+"</td>";
                code+="<td>"+row?.placed_date+"</td>";
                code+=`<td><span data-bs-toggle='modal' data-bs-target='#EditUserModal' onClick="ShowOrdersTableModal('Update','${row?.Id}','${row?.Price}','${row?.placed_date}')"><i  style='margin-right:5px;' class='fa-solid fa-pen-to-square'></i> </span><i class='fa-solid fa-trash' onclick="Delete_Record('Orders','${row?.Id}')"></i></td>`
                code+="</tr>";
            }
            code += `</tbody>
            </table>`
            // console.log(code)
            $("#Orders_table").html(code);
        },
        error: function(err) {
          console.log(err);
        }
      });
}


function GetReviewsData() {
    let code = `<h5>Product Reviews</h5>
    <button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#EditUserModal' onclick='ShowReviewsTableModal()'>Add Review</button>
    <table>
    <thead>
        <th>Review Id</th>
        <th>Product Id</th>
        <th>User Id</th>
        <th>Rating</th>
        <th>Comment</th>
        <th>Actions</th>
    </thead><tbody>`

    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': 'SELECT * FROM Reviews'},
        success: function(result) {
            console.log(result)
            for(var row of result.data)
            {   
                code+="<tr>";
                code+="<td>"+row?.Id+"</td>";
                code+="<td>"+row?.ProductId+"</td>";
                code+="<td>"+row?.UserId+"</td>";
                code+="<td>"+row?.Rating+"</td>";
                code+="<td>"+row?.Comments+"</td>";
                code+=`<td><span data-bs-toggle='modal' data-bs-target='#EditUserModal' onClick="ShowReviewsTableModal('Update  ','${row?.Id}','${row?.Rating}','${row?.Comments}')"><i  style='margin-right:5px;' class='fa-solid fa-pen-to-square'></i> </span><i class='fa-solid fa-trash' onclick="Delete_Record('Reviews','${row?.Id}')"></i></td>`
                code+="</tr>";
            }
            code += `</tbody>
            </table>`
            // console.log(code)
            $("#Reviews_table").html(code);
        },
        error: function(err) {
          console.log(err);
        }
      });
}

function GetProductsData() {
    let code = `<h5>Products</h5>
    <button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#EditUserModal' onclick='ShowProductsTableModal()'>Add Product</button>
    <table>
    <thead>
        <th>Product Id</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Actions</th>
    </thead><tbody>`

    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': 'SELECT * FROM Products'},
        success: function(result) {
            console.log(result)
            for(var row of result.data)
            {   
                code+="<tr>";
                code+="<td>"+row?.Id+"</td>";
                code+="<td>"+row?.Name+"</td>";
                code+="<td>"+row?.Category+"</td>";
                code+="<td>"+row?.Price+"</td>";
                code+=`<td><span data-bs-toggle='modal' data-bs-target='#EditUserModal' onClick="ShowProductsTableModal('Update','${row?.Id}','${row?.Name}','${row?.Price}','${row?.Category}')"><i  style='margin-right:5px;' class='fa-solid fa-pen-to-square'></i> </span><i class='fa-solid fa-trash' onclick="Delete_Record('Products','${row?.Id}')"></i></td>`
                code+="</tr>";
            }
            code += `</tbody>
            </table>`
            // console.log(code)
            $("#Products_table").html(code);
        },
        error: function(err) {
          console.log(err);
        }
      });
}

function Delete_Record(Table,id){
    console.log(Table,id)
    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': 'DELETE FROM '+Table+' WHERE Id='+id},
        success: function(result) {
            console.log(result)
            if(Table=='USERS')
                GetUserData()
            else if(Table=='Products')
                GetProductsData()
            else if(Table=='Reviews')
                GetReviewsData()
            else if(Table=='Orders')
                GetOrdersData()
                var x = document.getElementById("snackbar");
                if(result.err){
                    x.style.backgroundColor='red';
                    x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Error Occured ! ${result.err.code} `
                }
                else{
                    x.style.backgroundColor='green'
                    x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Successfully Record Deleted !! `

                }
                x.className = "show";
                setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        },
        error: function(err) {
          console.log(err);
        }
      });

    
}


function ShowOrdersTableModal(action='Add',id,Price,placed_date){
    $("#ModalLabel").html(action+' Order')
    let TableCode=OrderTableGivenValues({id,Price,placed_date});
    $('.modal-body').html(TableCode)

}

function ShowReviewsTableModal(action='Add',id,Rating,Comments){
    console.log(id,Rating,Comments)
    $("#ModalLabel").html(action+' Review')
    let TableCode=ReviewTableGivenValues({id,Rating,Comments});
    $('.modal-body').html(TableCode)

}


function ShowUsersTableModal(action='Add',id,name,Email,Address,Phone){
    $("#ModalLabel").html(action+' User')
    let TableCode=UserTableGivenValues({id:id,Name:name,Email:Email,Phone:Phone,Address:Address});
    $('.modal-body').html(TableCode)
}

function ShowProductsTableModal(action='Add',id,name,Price,Category){
    console.log(id,name,Price,Category)
    $("#ModalLabel").html(action+' Product')
    let TableCode=ProductTableGivenValues({id:id,Name:name,Price:Price,Category:Category});
    $('.modal-body').html(TableCode)
}

function UpdateUser(id){
    let Name = $('#username').val()
    let Email = $('#email').val()
    let Address = $('#address').val()
    let Phone = $('#phone').val()
    console.log(Name,Email,Phone,Address)
    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': `UPDATE Users SET Address='${Address}',Phone='${Phone}', Email = '${Email}',Name = '${Name}' Where Id = ${id}`},
        success: function(result) {
            console.log(result)
            var x = document.getElementById("snackbar");
            if(result.err){
                x.style.backgroundColor='green';
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${result.err.code}`
            }   
            else{
                GetUserData();
                x.style.backgroundColor='red';
                $('#EditUserModal').modal('hide');
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Successfully Updated the User Record`
            }
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        },
        error: function(err) {
          console.log(err);
          var x = document.getElementById("snackbar");
            x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${err}`
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        }
      });


}


function AddUser(){
    let Name = $('#username').val()
    let Email = $('#email').val()
    let Address = $('#address').val()
    let Phone = $('#phone').val()
    console.log(Name,Email,Phone,Address)
    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': `INSERT INTO USERS(Name,Email,Address,Phone) VALUES ('${Name}','${Email}','${Address}','${Phone}')`},
        success: function(result) {
            console.log(result)
            var x = document.getElementById("snackbar");
            if(result.err){
                x.style.backgroundColor='red';
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${result.err.code}`
            }   
            else{
                GetUserData();
                $('#EditUserModal').modal('hide');
                x.style.backgroundColor='green';
                $('#EditUserModal').modal('hide');
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Successfully Added the User Record`
            }
            x.className = "show";
                setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
                
        },
        error: function(err) {
          console.log(err);
          var x = document.getElementById("snackbar");
            x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${err}`
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        }
      });
    
}

function AddReview(){

    let Rating = $('#rating').val()
    let Comments = $('#comments').val()
    let ProductId =$('#PId').val()
    let UserId = $('#UId').val()
    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': `INSERT INTO Reviews(ProductId ,UserId ,Rating, Comments) VALUES (${ProductId},${UserId},'${Rating}','${Comments}')`},
        success: function(result) {
            console.log(result)
            var x = document.getElementById("snackbar");
            if(result.err){
                x.style.backgroundColor='red';
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${result.err.code}`
            }   
            else{
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Successfully Added the Review Record !`
                GetReviewsData();
                x.style.backgroundColor='green';
                $('#EditUserModal').modal('hide');
            }
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        },
        error: function(err) {
          console.log(err);
          var x = document.getElementById("snackbar");
            x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${err}`
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        }
      });
    
}
function UpdateReview(id){
    let Rating = $('#rating').val()
    let Comment = $('#comments').val()
    
    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': `UPDATE Reviews SET Rating = '${Rating}',Comments = '${Comment}' Where Id = ${id}`},
        success: function(result) {
            console.log(result)
            var x = document.getElementById("snackbar");
            if(result.err){
                x.style.backgroundColor='red';
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${result.err.code}`
            }   
            else{
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Successfully Updated the Review Record !`
                GetReviewsData();
                x.style.backgroundColor='green';
                $('#EditUserModal').modal('hide');
            }
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        },
        error: function(err) {
          console.log(err);
          var x = document.getElementById("snackbar");
            x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${err}`
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        }
      });
}


function UpdateOrder(id){
    let Order_Price = $('#order_price').val()
    let placed_date = $('#placed_date').val()

    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': `UPDATE Orders SET Price='${Order_Price}',placed_date='${placed_date}' Where Id = ${id}`},
        success: function(result) {
            console.log(result)
            var x = document.getElementById("snackbar");
            if(result.err){
                x.style.backgroundColor='red';
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${result.err.code}`
            }   
            else{
                GetOrdersData();
                $('#EditUserModal').modal('hide');
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Successfully Updated the Orders Record !`
            }
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        },
        error: function(err) {
          console.log(err);
          var x = document.getElementById("snackbar");
            x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${err}`
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        }
      });

}

function AddOrder(){
    let UserId = $('#UId').val()
    let Price = $('#order_price').val()
    let placed_date = $('#placed_date').val()


    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': `INSERT INTO Orders(UserId,Price,placed_date) VALUES ('${UserId}','${Price}','${placed_date}') `},
        success: function(result) {
            console.log(result)
            var x = document.getElementById("snackbar");
            if(result.err){
                x.style.backgroundColor='red';
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${result.err.code}`
            }   
            else{
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Successfully Added the Order Record !!`
                x.style.backgroundColor='green'
                GetOrdersData();
                $('#EditUserModal').modal('hide');
            }
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        },
        error: function(err) {
          console.log(err);
          var x = document.getElementById("snackbar");
            x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${err}`
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        }
      });

}

function AddProduct(){
    let Name = $('#pname').val()
    let Category = $('#PCategory').val()
    let Price = $('#Price').val()
    console.log(Name, Category, Price)
    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': `INSERT INTO Products(Name,Category,Price) VALUES ('${Name}','${Category}','${Price}') `},
        success: function(result) {
            console.log(result)
            var x = document.getElementById("snackbar");
            if(result.err){
                x.style.backgroundColor='red';
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${result.err.code}`
            }   
            else{
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Successfully Added the Product Record !!`
                x.style.backgroundColor='green'
                GetProductsData();
                $('#EditUserModal').modal('hide');
            }
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        },
        error: function(err) {
          console.log(err);
          var x = document.getElementById("snackbar");
            x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${err}`
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        }
      });

}



function UpdateProduct(id){
    let Name = $('#pname').val()
    let Category = $('#PCategory').val()
    let Price = $('#Price').val()
    console.log(Name, Category, Price)
    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': `UPDATE Products SET Name='${Name}',Price='${Price}', Category = '${Category}' Where Id = ${id}`},
        success: function(result) {
            console.log(result)
            var x = document.getElementById("snackbar");
            if(result.err){
                x.style.backgroundColor='red';
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${result.err.code}`
            }   
            else{
                x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Successfully Updated the Product Record !!`
                x.style.backgroundColor='green'
                GetProductsData();
                $('#EditUserModal').modal('hide');
            }
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        },
        error: function(err) {
          console.log(err);
          var x = document.getElementById("snackbar");
            x.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Error Occured ! ${err}`
            x.className = "show";
            setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        }
      });


}

function OrderTableGivenValues(row){

    let code='';
    const buttonText = row.id?'Update':'Add'
    code+=`
    <div class="container">`

    if(!row.id)
        code+=` <div>
            <label class="form-label">UserId </label>
            <input type="text" id="UId"  class="form-control mb-2" value=${row?.UserId || ''}>
                </div>
            `
    
    code+= `<div>
            <label class="form-label">Order Price </label>
            <input type="text" id="order_price"  class="form-control mb-2" value=${row?.Price || ''}>
        </div>
        <div>
            <label>Placed Date</label>
            <input id='placed_date' type='date' class="form-control mb-2" value=${row?.placed_date||''}>
        </div>
        <div class="d-flex justify-content-center mt-2">
            <button type="button" id="edit-btn" style='width:100px;' onClick="${row.id} ? UpdateOrder(${row?.id}) :AddOrder()" class="btn btn-primary">${buttonText}</button>


        </div>
        </div>
        `
    return code;

}


function ReviewTableGivenValues(row){
    console.log(row)
    let code = '';
    const buttonText = row.id?'Update':'Add'

    code+=`
    <div class="container">`
    if(!row.id)
             code+= `  <div>
                    <label class="form-label">Product Id</label>
                    <input type="text" id="PId"  class="form-control mb-2"> 
                </div>
                <div>
                <label class="form-label">User Id</label>
                <input type="text" id="UId"  class="form-control mb-2"> 
            </div>
                `
    code+=`
    <div class="container">
                <div>
                    <label class="form-label">Rating</label>
                    <input type="text" id="rating"  class="form-control mb-2" value=${row?.Rating || ''}>
                </div>
                <div>
                    <label>Comments</label>
                    <input id='comments' class="form-control mb-2" value='${row?.Comments || ''}' >
                </div>
                <div class="d-flex justify-content-center mt-2">
                    <button type="button" id="edit-btn" style='width:100px;' onClick="${row.id} ? UpdateReview(${row?.id}) :AddReview()" class="btn btn-primary">${buttonText}</button>
                </div>
              </div>
              `
            return code;
}

function UserTableGivenValues(row){
    console.log(row)
    let code = '';
    const buttonText = row.id?'Update':'Add'

    code+=`
    <div class="container">
                <div>
                    <label class="form-label">User Name</label>
                    <input type="text" id="username"  class="form-control mb-2" value=${row?.Name || ''}>
                </div>
                <div>
                    <label>Email Address</label>
                    <input type="email" id="email" class="form-control mb-2" value=${row?.Email || ''}>
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" id="address" class="form-control mb-2" value=${row?.Address || ''}>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" id="phone" class="form-control mb-2" value=${row?.Phone || ''}>
                </div>
                <div class="d-flex justify-content-center mt-2">
                    <button type="button" id="edit-btn" style='width:100px;' onClick="${row.id} ? UpdateUser(${row?.id}) :AddUser()" class="btn btn-primary">${buttonText}</button>
                </div>
              </div>
              `
            return code;
}



function ProductTableGivenValues(row){
    let code = '';
    console.log(row)
    const buttonText = row.id?'Update':'Add'
    code+=`
    <div class="container">
                <div>
                    <label class="form-label">Product Name</label>
                    <input type="text" id="pname"  class="form-control mb-2" value='${row?.Name||''}'>
                </div>
                <div>
                    <label>Category</label>
                    <input type="email" id="PCategory" class="form-control mb-2" value=${row?.Category||''}>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" id="Price" class="form-control mb-2" value=${row?.Price||''}>
                </div>
                <div class="d-flex justify-content-center mt-2">
                    <button type="button" id="edit-btn" style='width:100px;' onClick="${row.id} ? UpdateProduct(${row?.id}) :AddProduct()" class="btn btn-primary">${buttonText}</button>
                </div>
              </div>
              `
            return code;
}
document.getElementById('Products').style.display = "inline-block";
GetProductsData()
GetUserData()
GetReviewsData()
GetOrdersData()

function Execute_Prefined_Query(element){
    const query = element.innerHTML
    let code='<h5>Query Result</h5><table><thead>'

    $.ajax({
        url: "/api/execute",
        method: "POST",
        data:{'query': query},
        success: function(result) {
            console.log(result)
            const data= result.data
            
            let cols =Object.keys(data[0])
           
            for(let col of cols){
                code+=`<th>${col}</th>`
            }
            code+=' </thead><tbody>'
            for(let i=0;i<data.length;i++)
            {  
                code+="<tr>";
                for(let column of Object.values(data[i])){
                    code+="<td>"+column+"</td>";
                }
                code+="</tr>";
            }
            code += `</tbody>
            </table>`
            // console.log(code)
            $("#result").html(code);
        },
        error: function(err) {
          console.log(err);
        }
      });


    
}
