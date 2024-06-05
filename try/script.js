const btn = document.getElementById('getDataButton')
btn.addEventListener('click', function () {
  fetch("https://jsonplaceholder.typicode.com/users",{ 
          method: "GET",
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
      })
      .then(r => r.json())
      .then(info => { 
          const userData = document.getElementById('userData');
          info.forEach(user => {
              const row = document.createElement('tr');
              row.innerHTML = `<td>${user.id}</td>
                               <td>${user.username}</td>
                               <td>${user.name}</td>
                               <td>${user.email}</td>
                               <td>${user.phone}</td>
                               <td>${user.website}</td>
                               <td>${user.company.name}</td>
                               <td>${user.address.street}, ${user.address.suite}, ${user.address.city}</td>`;
              userData.appendChild(row);
          });
          btn.disabled = true;
      })
      .catch(err => console.log(err) )
  // Write code to disable the button after button click,
  // fetch data from https://jsonplaceholder.typicode.com/users
  // and display the data in the table with id userData
  // Each user should have a row in the table
  // Each row should have 8 columns (id, username, name, email, phone, website, company name, address)
  // Each column should have the corresponding data from the fetched data
  // If there is an error, log the error in the console
  // append each row to a table body with id userData (example below)
  // <tbody id="userData">
  //     <tr>
  //         <td>1</td>
  //         <td>Leanne Graham</td>
  //         <td>Bret</td>
  //         <td>Sincere@april.biz</td>
  //         <td>1-770-736-8031 x56442</td>
  //         <td>hildegard.org</td>
  //         <td>Romaguera-Crona</td>
  //         <td>Gwenborough, Kulas Light, Apt. 556</td>
  //     </tr>
  //     <tr>
  //         More rows...
  //     </tr>
  // </tbody>
});