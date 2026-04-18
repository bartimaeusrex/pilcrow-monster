const output = document.getElementById("output");

// Source: https://www.w3docs.com/snippets/javascript/how-to-html-encode-a-string.html
function html_encode(input) {
  const textArea = document.createElement("textarea");
  textArea.innerText = input;
  return textArea.innerHTML.split("<br />").join("\n");
}

function convert_text_to_HTML(txt) {
  let out = "";
  const txt_array = txt.split("\n");
  const txt_array_length = txt_array.length;
  let non_blank_line_count = 0;

  for (let i = 0; i < txt_array_length; i++) {
    const line = txt_array[i];
    if (line === "") {
      continue;
    }
    non_blank_line_count++;
    if (non_blank_line_count === 1) {
      out += `<h1>${line}</h1>`;
    } else {
      out += `<p>${line}</p>`;
    }
  }
  return out;
}

function convert_images_and_links_to_HTML(string) {
  let urls_unique = [];
  let images_unique = [];
  const urls = string.match(/https*:\/\/[^\s<),]+[^\s<),.]/gim) ?? [];
  const imgs = string.match(/[^"'>\s]+\.(jpg|jpeg|gif|png|webp)/gim) ?? [];

  const urls_length = urls.length;
  const images_length = imgs.length;

  for (let i = 0; i < urls_length; i++) {
    const url = urls[i];
    if (!urls_unique.includes(url)) {
      urls_unique.push(url);
    }
  }

  for (let i = 0; i < images_length; i++) {
    const img = imgs[i];
    if (!images_unique.includes(img)) {
      images_unique.push(img);
    }
  }

  const urls_unique_length = urls_unique.length;
  const images_unique_length = images_unique.length;

  for (let i = 0; i < urls_unique_length; i++) {
    const url = urls_unique[i];
    if (images_unique_length === 0 || !images_unique.includes(url)) {
      const a_tag = `<a href="${url}" target="_blank">${url}</a>`;
      string = string.replace(url, a_tag);
    }
  }

  for (let i = 0; i < images_unique_length; i++) {
    const img = images_unique[i];
    const img_tag = `<img src="${img}" alt="">`;
    const img_link = `<a href="${img}" target="_blank">${img_tag}</a>`;
    string = string.replace(img, img_link);
  }
  return string;
}

function convert(input_string) {
  output.innerHTML = convert_images_and_links_to_HTML(
    convert_text_to_HTML(html_encode(input_string))
  );
}