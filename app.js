// console.log($);
    $(() => {
        // $("form").on("submit", (event) => {
        //     const userInput = $("#search-box").val();
        //     $("form").trigger("reset");
        //     event.preventDefault();
        
        $.ajax({
            url: 'https://api.thedogapi.com/e4a15730-b39b-4c3a-86a9-3c55de9a18d8',
            type: "GET"
        }).then(
            (data)=>{
                console.log(data);
            },
            ()=>{
                console.log('bad request');
            });
        // });// form ends
    });