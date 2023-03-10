const json = '[{"name":"Cloud","age":19,"bool":false,"pi":3.14},{"name":"Tifa","age":20,"bool":true,"pi":3.1415},{"name":"Barret","age":27,"bool":true,"pi":3.14159}]';
    const obj = JSON.parse(json);

    const template = Handlebars.compile(document.getElementById("json-template").innerHTML);
    const html = template(obj);

    const container = document.getElementById("container");
    container.innerHTML = html;