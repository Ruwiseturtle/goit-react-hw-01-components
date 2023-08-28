import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { GoDotFill } from 'react-icons/go';


export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
      <li className={css.item} key={id}>
        <span className={css.status}>
          <GoDotFill
            className={isOnline ? css.online : css.isnotOnline}
            size={40}
          />
        </span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );

}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};