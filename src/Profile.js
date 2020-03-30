import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import profileImg from './image/profile.jpg'
import './Profile.css'

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

  export default function Profile() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} className="center">
            <img src={profileImg} className="profile-image" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <h3>竹内 美樹</h3>
            <p>
              私は日本の東京/神奈川を拠点とするWebエンジニア(主にフロントエンド開発者)です。
              <br />
              見た目に美しく、ユーザーフレンドリーなインターフェースの設計を心がけています。
              <br />
              <br />
              大学院を卒業後、新卒で中小のベンチャー企業に入社し、SaaSサービスの運用・テクニカルサポートとしてキャリアをスタートさせました。
              <br />
              その後、社内ツール開発やWebアプリケーションの開発を行いました。
              <br />
              <br />
              現在は子育てに奮闘しながら、委託開発としてレスポンシブ対応のSPA開発を行っています。
            </p>
            <p>
              I'm a Web-engineer( mainly front-end developer) based in Tokyo and Kanagawa, Japan, designing user-friendly interfaces with  beauty keep in mind for clients.
              <br />
              <br />
              After graduating from graduate school, I joined a small and medium-sized a startup with a fresh graduate, and started  career as a SaaS service operation and technical support.
              <br />
              <br />
              After that, I  developed in-house tools and WEB applications.
              <br />
              <br />
              Currently, while working hard on child-rearing, I'm  developing a SPA(responsive web design).
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }