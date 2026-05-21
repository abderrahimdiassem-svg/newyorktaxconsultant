export async function POST(req) {
    const urls = await req.json();
  
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host: "newyorktaxconsultant.com",
        key: "11e79b40ba0841b59846b7ebd3029e55",
        keyLocation:
          "https://newyorktaxconsultant.com/11e79b40ba0841b59846b7ebd3029e55.txt",
        urlList: urls,
      }),
    });
  
    return new Response(await response.text(), {
      status: response.status,
    });
  }