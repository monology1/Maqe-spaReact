import { Component } from "react";
// import axios from "axios";
import withRequest from "../lib/withRequest";
import {
  styled,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Grid from "@mui/material/Grid";
import { margin } from "@mui/system";
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
      <div id="card">
        {data.map((post) => (
          <Card
            variant="outlined"
            key={post.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
              ":nth-child(even)": { backgroundColor:"rgb(210,235,253)" },
            }}
          >
            <Grid
              id="cardHeader"
              container
              spacing={1}
              sx={{ ":nth-child(odd)": {borderBottom:"1px solid #e9e9e9"},
              ":nth-child(even)": { borderBottom:"1px solid rgb(199,221,236)" },
             }}
            >
              <Grid item xs container direction="row">
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="recipe"
                      src={post.avatar_url}
                      alt={post.title}
                    />
                  }
                  title={post.name}
                  titleTypographyProps={{
                    variant: "body2",
                    color: "#ff5722",
                    fontWeight: "bold",
                  }}
                ></CardHeader>

                <Grid
                  item
                  xs="6"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                    align="left"
                    variant="caption"
                    color="textSecondary"
                  >
                    {"posted on " + post.time}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <CardContent
              sx={{
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              variant="outlined"
            >
              <Grid id="cardContent" container spacing={3}>
                <Grid item>
                  <CardMedia
                    component="img"
                    sx={{ height: "12rem", width: "16rem" }}
                    image={post.image_url}
                    alt="imageContent"
                  />
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs={2}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{ fontWeight: "bold" }}
                      >
                        {post.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" component="p">
                        {post.body}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
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
