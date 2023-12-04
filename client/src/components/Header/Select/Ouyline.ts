


export default () => ({
    select: {
        display: 'flex',
        minWidth: 240,
        background: 'white',
        borderStyle:'none',
        borderRadius: 8,
        paddingLeft: 24,
        paddingTop: 14,
        paddingBottom: 15,
        boxShadow: 'none',
        "&:focus":{
            borderRadius: 8,
            background: 'white',
        },
        '&[aria-expanded="true"]':{
            background: '#fafafa'
        },
        "& > div":{
            display:'inline-flex' // this shows the icon in the SelectInput but not the dropdown
        }
    },
    icon:{
        color: '#2196f3',
        right: 12,
        position: 'absolute',
        userSelect: 'none',
        pointerEvents: 'none'
    },
    paper: {
        borderRadius: 4,
        marginTop: 8
    },
    list: {
        paddingTop:0,
        paddingBottom:0,
        paddingRight:8,
        paddingLeft:8,
        background:'white',
        "& li":{
            paddingTop:12,
            paddingBottom:12,
            paddingRight:8,
            paddingLeft:8,
        },
        "& li:hover":{
            background: '#e3f2fd'
        },
        "& li.Mui-selected":{
            color:'black',
            background: 'white'
        },
        "& li.Mui-selected:hover":{
            background: '#e3f2fd'
        }
    },
    listIcon: {
        minWidth: 32,
        display: 'none' // hide the ListItemIcon in the dropdown
    }
});