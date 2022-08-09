import { Component } from "react";
// import axios from "axios";
import withRequest from "../lib/withRequest";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import moment from "moment";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  identifyAuthor = (dataInput) => {
    const data = dataInput.data;
    const author = dataInput.author;
    data.map((post) => {
      const found = author.find((item) => {
        return item.id === post.author_id;
      });
      //Include the author info in post
      const time = moment(post.created_at).format("dddd, MMM D, YYYY, h:mm");
      //convert time from ISO
      post.time = time;
      post.name = found.name;
      post.role = found.role;
      post.place = found.place;
      post.avatar_url = found.avatar_url;
    });
    // console.log(data)
    this.setState({ data: data });
  };

  componentDidMount() {
    setTimeout(() => {
      const data = this.props;
      this.identifyAuthor(data);
    }, 1500);
  }
  render() {
    const data = this.props.data;
    console.log(data);
    return (
      <div>
        {data.map((post) => (
          <Card
            variant="outlined"
            key={post.id}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  src={post.avatar_url}
                  alt={post.title}
                />
              }
              title={post.name + " Posted on " + post.time}
              titleTypographyProps={{
                variant: "h6",
                color: "#ff5722",
              }}
            ></CardHeader>
            <CardContent
              sx={{
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <CardMedia
                  component="img"
                  sx={{ height: "12rem", width: "16rem", display: "block" }}
                  image={post.image_url}
                  alt="imageContent"
                />
              </div>
              <div sx={{ pt: 8, px: 2, flex: "auto", height: "100%" }}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.body}
                </Typography>
              </div>
            </CardContent>
            {/* <CardContent sx={{width:"50%"}}>
            
            </CardContent> */}
          </Card>
        ))}
      </div>
    );
  }
}
export default withRequest("http://maqe.github.io/json/posts.json")(Post);
