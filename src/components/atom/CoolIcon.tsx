import { AiOutlineDelete, AiOutlineEdit, AiOutlineFile, AiOutlineFilePdf, AiOutlineSearch } from 'react-icons/ai';
import { BsArrowLeftShort, BsArrowRightShort, BsCheck, BsCheck2, BsMap } from 'react-icons/bs';
import { CgCloseR } from 'react-icons/cg';
import { FiMail } from 'react-icons/fi';
import { FaRedo, FaRegListAlt, FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext, MdOutlineCancel } from 'react-icons/md';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { IoMdAddCircleOutline, IoMdPeople, IoMdPhonePortrait } from 'react-icons/io';
import { BiDownload, BiUpload } from 'react-icons/bi';
import { TbFileAlert } from 'react-icons/tb';
import { ImWarning } from 'react-icons/im';
import { GrInProgress } from 'react-icons/gr';
import { IconTypeEnum } from '../../types/types';


const getIcon = (type: IconTypeEnum): JSX.Element => {
    switch (type) {
        case IconTypeEnum.LOGOUT:
            return <RiLogoutCircleRLine />
        case IconTypeEnum.PREVIOUS:
            return <MdOutlineNavigateBefore />
        case IconTypeEnum.NEXT:
            return <MdOutlineNavigateNext />
        case IconTypeEnum.CANCEL:
            return <MdOutlineCancel />
        case IconTypeEnum.CONFIRM:
            return <BsCheck />
        case IconTypeEnum.CLOSE:
            return <CgCloseR />
        case IconTypeEnum.USER:
            return <FaUserCircle />
        case IconTypeEnum.LOGIN:
            return <FaSignInAlt />
        case IconTypeEnum.EDIT:
            return <AiOutlineEdit />
        case IconTypeEnum.DELETE:
            return <AiOutlineDelete />
        case IconTypeEnum.ADD:
            return <IoMdAddCircleOutline />
        case IconTypeEnum.CHECK:
            return <BsCheck2 />
        case IconTypeEnum.SEARCH:
            return <AiOutlineSearch />
        case IconTypeEnum.MAIL:
            return <FiMail />
        case IconTypeEnum.PHONE:
            return <IoMdPhonePortrait />
        case IconTypeEnum.ARROW_PREVIOUS:
            return <BsArrowLeftShort />
        case IconTypeEnum.ARROW_NEXT:
            return <BsArrowRightShort />
        case IconTypeEnum.DONWLOAD:
            return <BiDownload />
        case IconTypeEnum.UPLOAD:
            return <BiUpload />
        case IconTypeEnum.ALERT:
            return <ImWarning />
        case IconTypeEnum.MAP:
            return <BsMap />
        case IconTypeEnum.PDF:
            return <AiOutlineFilePdf />
        case IconTypeEnum.MEETING:
            return <IoMdPeople />
        case IconTypeEnum.LOG:
            return <FaRegListAlt />
        case IconTypeEnum.FILE:
            return <AiOutlineFile />
        case IconTypeEnum.INCIDENCE:
            return <TbFileAlert />
        case IconTypeEnum.PROGRESS:
            return <GrInProgress />
        case IconTypeEnum.REDO:
            return <FaRedo />
        default:
            return <></>
    }
}

export function CoolIcon({ type }: { type: IconTypeEnum }) {
    return (
        getIcon(type)
    )
}