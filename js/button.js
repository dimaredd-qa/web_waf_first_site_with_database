var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        // Создаем новый элемент img
        var img = document.createElement("img");
        // Устанавливаем источник изображения
        img.src = "image/My_photo1.jpg";
        // Добавляем изображение в параграф
        document.getElementById("demo").appendChild(img);
    }
}