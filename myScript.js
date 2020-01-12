try{
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById(
        "currentdate2"
    ).textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
    alert(document.lastModified);
    // returns: Saturday, January 12, 2020 10:56:42);
}