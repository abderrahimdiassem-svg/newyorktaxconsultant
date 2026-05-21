export async function POST(req) {
    const urls = await req.json();
  
    const normalizedUrls = urls.map((url) =>
      url.replace("https://newyorktaxconsultant.com", "https://www.newyorktaxconsultant.com")
    );
  
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host: "www.newyorktaxconsultant.com",
        key: "11e79b40ba0841b59846b7ebd3029e55",
        keyLocation:
          "https://www.newyorktaxconsultant.com/11e79b40ba0841b59846b7ebd3029e55.txt",
        urlList: normalizedUrls,
      }),
    });
  
    return new Response(await response.text(), {
      status: response.status,
    });
  }