import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styled from 'styled-components';
import { NaverMap } from 'types/map';
import type { Store } from 'types/store';
import { INITIAL_ZOOM } from 'hooks/useMap';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';

type Props = {
  currentStore?: Store;
  mapId?: string;
  initialZoom?: number;
  onLoad?: (map: NaverMap, marker: NaverMap) => void;
};

const DetailContent = ({
  mapId = 'map',
  initialZoom = INITIAL_ZOOM,
  onLoad,
  currentStore,
}: Props) => {
  if (!currentStore) return null;
  const menuLengths = currentStore.menus.length;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    const storeLat = currentStore.coordinates[0];
    const storeLng = currentStore.coordinates[1];

    const mapOptions = {
      center: new naver.maps.LatLng(storeLat, storeLng),
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
    };

    const map = new naver.maps.Map(mapId, mapOptions);

    const markerOptions = {
      position: new naver.maps.LatLng(storeLat, storeLng),
      map: map,
    };

    const marker = new naver.maps.Marker(markerOptions);

    mapRef.current = map;

    if (onLoad) {
      onLoad(map, marker);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <Styled>
      <div className={`detail_content`}>
        <div className="images">
          {currentStore.images.slice(0, 3).map((image) => (
            <div
              style={{ position: 'relative', maxWidth: 120, height: 80 }}
              key={image}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="120px"
                style={{ objectFit: 'cover' }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
              />
            </div>
          ))}
        </div>
        <div className="description">
          <p>{currentStore.description || '소개 글이 등록되지 않았습니다.'}</p>
        </div>
        <div className="line" />
        <div className="basic_info">
          <div className="address">
            <IoLocationOutline size={20} color="#9e9e9e" />
            <span>{currentStore.address || '정보가 없습니다.'}</span>
          </div>
          <div className="phone">
            <IoCallOutline size={18} color="#9e9e9e" />
            <span>{currentStore.phone || '정보가 없습니다.'}</span>
          </div>
          <div className="naver_url">
            <Script
              strategy="afterInteractive"
              type="text/javascript"
              src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
              onReady={initializeMap}
            />
            <div id={mapId} className="map" />
            <Link
              href={`http://map.naver.com/v5/entry/place/${currentStore.nid}?c=14.56,0,0,0,dh`}
              aria-label="네이버 지도로 길찾기"
              target="_blank"
              className="naver_map_btn"
            >
              네이버 지도에서 길찾기
            </Link>
          </div>
        </div>
        <div className="line" />
        <div className="menus">
          <div className="menus_title">
            <h2>메뉴</h2>
            <span>{menuLengths}</span>
          </div>
          <ul className="menu_list">
            {currentStore.menus?.map((menu) => (
              <li className="menu" key={menu.name}>
                <span className="name">{menu.name}</span>
                <span className="price">{menu.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Styled>
  );
};
export default DetailContent;

const Styled = styled.div`
  .detail_content {
    height: 100%;
    padding-top: 6.125rem;
    overflow: hidden;

    > .images {
      display: grid;
      grid-template-columns: repeat(3, minmax(auto, 120px));
      justify-content: center;
      gap: 12px;
      margin-bottom: 1rem;
      padding: 0 1.25rem;
    }

    > .line {
      width: 100%;
      height: 10px;
      margin: 20px 0;
      background: #e9ecef;
      border: 1px solid #e2e5e8;
    }

    > .description {
      padding: 0 20px;

      > p {
        font-size: 0.875rem;
        color: #666;
      }
    }

    > .basic_info {
      padding: 0 20px;

      > div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ecf0f2;

        &:last-of-type {
          border-bottom: none;
          padding-bottom: 0;
        }

        &.address {
          > span {
            margin-left: 8px;
            font-size: 0.875rem;
            color: #424242;
          }
        }

        &.phone {
          > span {
            margin-left: 10px;
            font-size: 0.875rem;
            color: #424242;
          }
        }

        &.naver_url {
          flex-direction: column;

          .map {
            width: 100%;
            height: 150px;
          }

          .naver_map_btn {
            width: 100%;
            display: block;
            padding: 10px;
            margin-top: 10px;
            background: #00cf5b;
            text-align: center;
            color: #fff;
            line-height: 1.3;
            font-weight: 500;
          }
        }
      }
    }

    > .menus {
      > .menus_title {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0px 20px 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid;
        border-bottom-color: #ecf0f2;

        > h2 {
          font-size: 1.125rem;
        }

        > span {
          font-weight: 700;
          color: #f88a25;
        }
      }

      > .menu_list {
        padding: 0 20px;
        margin-bottom: 20px;

        > .menu {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;

          > .name {
            max-width: 70%;
            word-break: keep-all;
            color: #0068c3;
          }

          > .price {
            color: #f88a25;
          }
        }
      }
    }
  }
`;
