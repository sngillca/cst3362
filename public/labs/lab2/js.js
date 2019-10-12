$.ajax({
  method: "GET",
     url: "https://cst336.herokuapp.com/projects/api/state_abbrAPI.php",
dataType: "JSON",
success: function(result,status) {
  
     alert(result);
 
} 
});//ajax
