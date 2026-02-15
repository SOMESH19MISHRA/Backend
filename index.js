require("dotenv").config();

const express=require("express");
const app= express();
// const port= 3000;
const githubData={
  "login": "SOMESH19MISHRA",
  "id": 144807644,
  "node_id": "U_kgDOCKGW3A",
  "avatar_url": "https://avatars.githubusercontent.com/u/144807644?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SOMESH19MISHRA",
  "html_url": "https://github.com/SOMESH19MISHRA",
  "followers_url": "https://api.github.com/users/SOMESH19MISHRA/followers",
  "following_url": "https://api.github.com/users/SOMESH19MISHRA/following{/other_user}",
  "gists_url": "https://api.github.com/users/SOMESH19MISHRA/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SOMESH19MISHRA/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SOMESH19MISHRA/subscriptions",
  "organizations_url": "https://api.github.com/users/SOMESH19MISHRA/orgs",
  "repos_url": "https://api.github.com/users/SOMESH19MISHRA/repos",
  "events_url": "https://api.github.com/users/SOMESH19MISHRA/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SOMESH19MISHRA/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Somesh Mishra",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2023-09-12T12:56:03Z",
  "updated_at": "2026-01-11T07:37:56Z"
};

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/linkedin",(req,res)=>{
    res.send("mishra19somesh");
});

app.get("/login",(req,res)=>{
    res.send("<h1>PLease login your details here</h1>");
});

app.get("/github",(req,res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`);
});