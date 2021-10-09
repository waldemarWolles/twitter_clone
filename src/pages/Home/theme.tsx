import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useHomeStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: '100vh',
    },
    root: {
      flexGrow: 1,
      '&>div>div': {
        display: 'flex',
        justifyContent: 'flex-start',
      },
    },
    paper: {
      height: 140,
      width: 100,
      backgroundColor: 'black',
    },
    control: {
      padding: theme.spacing(2),
    },
    sideMenuList: {
      position: 'sticky',
      top: 0,
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    sideMenuListItem: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',

      '& a': {
        color: 'inherit',
        textDecoration: 'none',
      },

      '&:hover': {
        '&>button': {
          backgroundColor: '#0000000a',
        },
        '&>button>span>h6': {
          color: 'rgb(29, 161, 242)',
        },
        '&>button>span>svg': {
          color: 'rgb(29, 161, 242)',
        },
      },
    },
    iconButton: {
      borderRadius: '30px',
      margin: '4px',
      paddingRight: '20px',
    },
    logoWrapper: {
      paddingRight: '12px',
    },
    logo: {
      fontSize: 36,
    },
    sideMenuListItemLabel: {
      fontWeight: 700,
      color: 'black',
      fontSize: 20,
    },
    sideMenuListItemIcon: {
      color: 'black',
      marginRight: theme.spacing(2),
      fontSize: 30,
    },
    tweetsWrapper: {
      display: 'flex',
      flexDirection: 'column',

      borderRadius: '0',
      height: '100%',
      borderTop: '0',
      borderBottom: '0',
    },
    tweetsHeader: {
      display: 'flex',
      alignItems: 'center',
      borderTop: '0',
      borderLeft: '0',
      borderRight: '0',
      borderRadius: '0',
      maxHeight: '40px',
      width: '100%',

      '& h6': {
        padding: '20px 15px',

        fontWeight: 800,
      },
    },

    tweetsLink: {
      textDecoration: 'none',
      color: 'inherit',
    },

    tweetsTweet: {
      padding: '10px 15px 0px',
      borderRadius: '0',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.03)',
      },
    },

    tweetTitle: {
      marginLeft: 20,

      '&>span': {
        display: 'block',
      },
    },
    tweetAvatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    tweetContent: {
      fontSize: '24px',
      marginLeft: 20,
      marginBottom: 10,
    },
    tweetFooter: {
      marginLeft: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
      width: 425,
    },
    searchField: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      backgroundColor: '#eff3f4',
      borderRadius: theme.spacing(3),
      minHeight: 50,
      paddingRight: theme.spacing(2),
    },

    searchFieldIcon: {
      paddingLeft: theme.spacing(2),
      color: '#536471',
    },
    tweetButton: {
      marginTop: '15px',
      width: 230,
      '&:hover': {
        backgroundColor: '#1578b4',
      },
    },
    tweetInputWrapper: {
      padding: '10px 15px 0px',
      borderRadius: '0',
    },
    inputTweetTextField: {
      width: '500px',
      minHeight: '50px !important',
      paddingLeft: '25px',
      border: 0,
      fontSize: 20,
      outline: 'none',
      fontFamily: 'inherit',
      resize: 'none',
    },
    tweetInputButtons: {
      marginLeft: 20,
      paddingTop: 10,
      paddingBottom: 10,
      display: 'flex',
      alignItems: 'center',
      verticalAlign: 'middle',
      justifyContent: 'spece-between',
    },
    optionsButtons: {
      display: 'flex',
      alignItems: 'center',
      verticalAlign: 'middle',
      width: '85%',
    },
    tweetInputIconButton: {
      padding: theme.spacing(1),
    },
    tweetInputIconIcon: {
      color: '#1da1f2',
      fontSize: 24,
    },

    tweetInputTweetButton: {
      width: '15%',
    },
    divider: {
      height: 10,
      backgroundColor: '#eff3f4',
    },

    sideBarNewsBlock: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#eff3f4',
      borderRadius: '25px',
    },
    sideBarNewsBlockHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 16px',
    },
    sideBarNewsBlockTweets: {
      paddingLeft: theme.spacing(2),
      fontSize: 13,
      color: '#536471',
    },
    sideBarNewsBlockFooter: {
      padding: '12px 16px',
      borderBottomLeftRadius: '25px',
      borderBottomRightRadius: '25px',
      backgroundColor: '#f7f9f9',
      cursor: 'pointer',
      transition: 'background-color .2s linear',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.03)',
      },
    },

    sideBarNewsSubBlockLink: {
      textDecoration: 'none',
      color: 'inherit',
    },
    sideBarNewsSubBlock: {
      borderBottom: '1px solid #eff3f4',
      backgroundColor: '#f7f9f9',
      paddingBottom: '12px',
      transition: 'background-color .2s linear',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.03)',
      },
    },
    // modal: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   position: 'absolute',
    //   top: '40%',
    //   left: '40%',
    // },
    // paper: {
    //   backgroundColor: theme.palette.background.paper,
    //   border: '2px solid #000',
    //   boxShadow: theme.shadows[5],
    //   padding: theme.spacing(2, 4, 3),
    // },
    dialogModal: {
      color: 'white',
    },

    sideSearchAndNews: {
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
    },

    tweetInputCircleProgress: {
      position: 'relative',
      width: 20,
      height: 20,
      margin: '0 10px',
      '& .MuiCircularProgress-root': {
        position: 'absolute',
      },
    },
  })
)
