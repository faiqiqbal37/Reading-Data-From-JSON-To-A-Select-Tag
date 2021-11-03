 // For creating reading JSON object and creating a dropdown of the courses of BCS.
 
 
 $(function () {
        $.ajax({
          url: "data.json",
          dataType: "json",
          success: function (data) {
            var items = [];

            $.each(data, function (key, val) {
              if (key == "BCS") {
                for (let i = 0; i <= key.length; i++) {
                  items.push(
                    '<option value="' + key[i] + '">' + val[i] + "</option>"
                  );
                }
              }
            });

            $("<label/>", {
              class: "course-label",
              html: "Please Select The Course: ",
            }).appendTo("#courses");

            $("<select/>", {
              class: "course-list",
              html: items.join(""),
            }).appendTo("#courses");
          },

          statusCode: {
            404: function () {
              alert("There was a problem with the server.  Try again soon!");
            },
          },
          complete: function () {
            console.log("Done");
          },
        });
      });


// For creating reading JSON object and creating a dropdown of the courses of BCS.
 
 
 $(function () {
        $.ajax({
          url: "data.json",
          dataType: "json",
          success: function (data) {
            var items = [];

            $.each(data, function (key, val) {
              if (key == "BCE") {
                for (let i = 0; i <= key.length; i++) {
                  items.push(
                    '<option value="' + key[i] + '">' + val[i] + "</option>"
                  );
                }
              }
            });

            $("<label/>", {
              class: "course-label",
              html: "Please Select The Course: ",
            }).appendTo("#courses");

            $("<select/>", {
              class: "course-list",
              html: items.join(""),
            }).appendTo("#courses");
          },

          statusCode: {
            404: function () {
              alert("There was a problem with the server.  Try again soon!");
            },
          },
          complete: function () {
            
            console.log("Done");
          },
        });
      });
