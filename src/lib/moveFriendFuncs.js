import { friendsFilter } from './searchFunc';

function changeButnsClassList(btn, distantionContainer) {
    if (distantionContainer.id == 'right-container') {
        btn.classList.remove('friends__friend-btn');
        btn.classList.remove('plusbtn');
        btn.classList.add('friends__friend-removebtn');
        btn.classList.add('closebtn');
    } else if (distantionContainer.id == 'left-container') {        
        btn.classList.remove('friends__friend-removebtn');
        btn.classList.remove('closebtn');
        btn.classList.add('friends__friend-btn');
        btn.classList.add('plusbtn');
    }
}

function changeFriendsLists(friend, sourceContainer, distantionContainer, friendsStore) {
    let tempLeftFriend = document.querySelector('#friend-template').innerHTML;
    let tempRightFriend = document.querySelector('#friend-moved-template').innerHTML;
    let leftInputValue = document.querySelector('#left-search').value;
    let rightInputValue = document.querySelector('#right-search').value;

    if (distantionContainer.id == 'right-container') {
        putElemToTheEndOfArray(
                                friend,
                                friendsStore.leftList,
                                friendsStore.rightList,
                                tempRightFriend,
                                rightInputValue,
                                distantionContainer
                            );
    } else if (distantionContainer.id == 'left-container') {        
        putElemToTheEndOfArray(
                                friend,
                                friendsStore.rightList,
                                friendsStore.leftList,
                                tempLeftFriend,
                                leftInputValue,
                                distantionContainer
                            );
    }    
}

function putElemToTheEndOfArray(friendElem, sourceList, distationList, tempFriend, chunk, container) {
    let friendElemId = friendElem.dataset.id;
    let friendElemPosition = -1;
    let friend = sourceList.find(hasElementId);    

    if (friendElemPosition >= 0) {
        friend = sourceList.splice(friendElemPosition, 1);
        distationList.push(friend[0]);

        if (chunk) {
            friendsFilter(chunk, distationList, container, tempFriend);
        }  
    }      

    function hasElementId(elem, index) {
        if (elem.id == friendElemId) {
            friendElemPosition = index;
            return true;
        } else {
            return false;
        }
    }
}

export {
    changeButnsClassList,
    changeFriendsLists
};