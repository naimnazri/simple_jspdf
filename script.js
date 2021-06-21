
  var len = 3; //$x(".//body/div/div").length
  var pdf = new jsPDF('p', 'mm', 'a4');
  var position = 0;
  
  function loadPdf() {
    for (let i = 1; i <= len; i++) {
      html2canvas(document.querySelector('#card-' + i), {
        dpi: 300, // Set to 300 DPI
        scale: 1 // Adjusts your resolution
      }).then((canvas,index) => {
        pdf.text('test'+ index);
        pdf.addImage(canvas.toDataURL("images/jpeg", 1), 'JPEG', 0, position, 210, 295);
  
        if (i == len) {
          pdf.save('sample-file.pdf');
        } else {
          pdf.addPage();
        }
      });
    }
  }
  