import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ImgNo1 from './image/work-no-1.jpg';
import ImgNo2 from './image/work-no-2.jpg';
import ImgNo3 from './image/work-no-3.jpg';
import ImgNo4 from './image/work-no-4.jpg';
import ImgNo5 from './image/work-no-5.jpg';
import ImgNo6 from './image/work-no-6.jpg';

const useStyles = makeStyles({
  rootCard: {
    maxWidth: 345,
  },
  root: {
    flexGrow: 1,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const [spacing] = useState(2);

  return (
    <Grid container className={classes.root} justify="center" spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Card className={classes.rootCard}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Potfolio"
                height="140"
                image={ImgNo6}
                title="Potfolio"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Potfolio<br />　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  JavaScript/HTML5/CSS3
                  <br />
                  React.js/Material-UI
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.rootCard}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="SPA(問い合わせページ)開発"
                height="140"
                image={ImgNo5}
                title="SPA(問い合わせページ)開発"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  SPA(問い合わせページ)開発　　　　　　　　　
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  JavaScript/HTML5/CSS3/React.js
                  <br />
                  　　　　　　　　　
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.rootCard}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="スマートドローンソリューションのプラットフォーム開発"
                height="140"
                image={ImgNo4}
                title="スマートドローンソリューションのプラットフォーム開発"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  スマートドローンソリューションのプラットフォーム開発
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  JavaScript/HTML5/CSS3
                  <br />
                  AWS(S3,Cognito)/React.js
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.rootCard}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="社員モチベーション管理ツール開発"
                height="140"
                image={ImgNo3}
                title="社員モチベーション管理ツール開発"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  社員モチベーション管理ツール開発
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  JavaScript/PHP(7系)/HTML5/CSS3
                  <br />
                  MySQL/CodeIgniter/webpack
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.rootCard}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="VR住宅物件紹介のUnity開発"
                height="140"
                image={ImgNo2}
                title="VR住宅物件紹介のUnity開発"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  VR住宅物件紹介のUnity開発　　　　　　　　　
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  JavaScript/SketchUp Make/Unity3D
                  <br />
                  　　　　　
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.rootCard}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="SaaSサービスの分析レポート自動生成ツール開発"
                height="140"
                // image="/static/images/cards/contemplative-reptile.jpg"
                image={ImgNo1}
                title="SaaSサービスの分析レポート自動生成ツール開発"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  SaaSサービスの分析レポート自動生成ツール開発
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  JavaScript/PHP(5)/MySQL
                  <br />
                  CodeIgniter/Ajax/json/jQuery
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}