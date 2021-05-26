let selectedFilter;

$(".apply-filter").click(function() {
    let filter = $("input").val();
    if (filter === "Harlem") {
        $("img").css("filter", "contrast(115%) brightness(120%)");
    } else if (filter === "Bushwick") {
        $("img").css("filter", "contrast(50%) brightness(180%)");
    } else if (filter === "SOMA") {
        $("img").css("filter", "grayscale(50%) hue-rotate(10deg)");
    } else if (filter === "Sunset") {
        $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");
    } else if (filter === "Mateo") {
        $("img").css("filter", "contrast(140%) hue-rotate(-15deg) saturate(155%)");
    }


});

$(".apply-size").click(function() {
    let size = $(".Size").val();
	if (size < 1000) {
       $("img").css("width", size+"px");
    }
});

$(".reset").click(function() {
    $("img").css("filter", "");
});