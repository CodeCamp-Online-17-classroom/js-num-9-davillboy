// write code here
function calculateDiagonalLength() {
            
            let sideA = parseFloat(prompt("ความยาวมุมที่1:"));
            let sideB = parseFloat(prompt("ความยาวมุมที่2:"));
          
            if (isNaN(sideA) || isNaN(sideB) || sideA <= 0 || sideB <= 0) {
              alert("ใส่ตัวเลขเท่านั้น.");
              return;
            }
          
            let diagonalLength = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
            
            diagonalLength = diagonalLength.toFixed(2);
          
            alert("ความยาวเส้นทแยงมุมของสี่เหลี่ยมผืนผ้า: " + diagonalLength);
            console.log("ความยาวเส้นทแยงมุมของสี่เหลี่ยมผืนผ้า: " + diagonalLength);
          }
          
          calculateDiagonalLength();
