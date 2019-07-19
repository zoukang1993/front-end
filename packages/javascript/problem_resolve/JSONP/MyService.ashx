// 程序B
public class MyService : IHttpHandler
{
    public void ProcessRequest(HttpContext context)
    {
        // 获取回调函数名
        string callback = context.Request.QueryString["callback"];

        // json data
        string json = "{\"name\":\"chopper\", \"sex\":\"man\"}";

        context.Response.ContextType = "application/json";
        // outputm: callback of name(json Data)
        context.Response.Write(callback + "(" + json + ")")
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
}