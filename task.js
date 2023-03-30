
        var products = [];
        function addProduct() {
            event.preventDefault();
            var name = getValueById("product_name");
            var price = getValueById("product_price");
            var desc = getValueById("product_description");
            var imgUrl = getValueById("product_img_url");
            var product = {
                prodId: generateUniqueId(),
                name: name,
                price: price,
                description: desc,
                imageUrl: imgUrl
            }
            console.log(product);
            products.push(product);
            document.getElementById("form").reset();
            showProducts();
        }
        function getValueById(id) {
            var value = document.getElementById(id).value;
            return value;
        }
        function showProducts() {
            var index = 0;
            var productsList = "";
            while (index < products.length) {
                var product = products[index];
                productsList = productsList + "<li>" + product.name + "&nbsp;&nbsp;&nbsp;" + product.price + "&nbsp;&nbsp;&nbsp;" + product.description + "&nbsp;&nbsp;&nbsp;" + "<img style='width:42px; height:42px' src="   +product.imageUrl + ">" + "&nbsp;&nbsp;&nbsp;" + "<button onclick='deleteProduct(" + product.prodId + ")'>Delete</button> " + "<button onclick='updateProduct(" + product.prodId + ")'>update</button>" + " </li > ";
                index++;
            }
            document.getElementById("productList").innerHTML = productsList;
        }

        var initialId = 0;
        function generateUniqueId() {
            initialId++;
            return initialId;
        }

        function updateValue(id, inputValue){
            document.getElementById(id).value = inputValue;
        }

        /*                     
               products = [ {pid:1} , {pid:2}, {pid:3}, {pid:4}]
        */
        function deleteProduct(pid) {
            console.log(pid);
            var index = 0;
            while (index < products.length) {
                var product = products[index];
                if (product.prodId == pid) {
                    products.splice(index, 1);
                    break;
                }
                index++;
            }
            showProducts();
        }
        function updateProduct(pid){
            var index = 0;
            while (index < products.length) {
                var product = products[index];
                if (product.prodId == pid) {
                    updateValue("product_name", product.name);
                    updateValue("product_price", product.price);
                    updateValue("product_description", product.description);
                     updateValue("product_img_url", product.imageUrl);
                         
                }
                index++;
            }
             var addOrSave = document.getElementById("addOrSave");
             addOrSave.innerHTML = "save Product";
             addOrSave.removeAttribute("onclick");
             addOrSave.setAttribute('onclick', "saveProduct(" + pid + ")");

        }
        function saveProduct(pid){
            
            event.preventDefault();
            var name = getValueById("product_name");
            var price = getValueById("product_price");
            var desc = getValueById("product_description");
            var imgUrl = getValueById("product_img_url");

            var index = 0;
            while (index < products.length) {
                var product = products[index];
                if (product.prodId == pid) {
                   product.name = name;
                   product.price = price;
                   product.description = desc;
                   product.imageUrl = imgUrl;
                   break; 
                }
                index++;
            }
            var addOrSave = document.getElementById("addOrSave");
             addOrSave.innerHTML = "Add Product";
             addOrSave.removeAttribute("onclick");
             addOrSave.setAttribute('onclick', "addProduct()");

            showProducts();
        
        }

        