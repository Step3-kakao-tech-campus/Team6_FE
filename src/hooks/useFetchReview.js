import {useEffect, useState} from "react";
import {useInfiniteQuery} from "react-query";
import {getReviewByPage} from "../apis/review";
import _ from "lodash";

const MAX_PAGE_SIZE = 10;
export default function useFetchReview(placeId) {
  const [reviews, setReviews] = useState([]);

  const infiniteQuery = useInfiniteQuery(
    ["getGraphDataByPage"],
    async ({ pageParam = 0 }) => getReviewByPage(placeId, pageParam),
    // lastPage: 이전 페이지의 데이터
    // allPages: 이전 페이지를 포함한 모든 페이지의 데이터
    // getNextPageParam: 다음 페이지의 파라미터를 반환하는 함수
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < MAX_PAGE_SIZE) {
          return undefined;
        } else {
          return allPages?.length;
        }
      },
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    // 한번 더 데이터를 검증해서 중복되는 데이터를 제거한다.
    if (infiniteQuery.data) {
      const allFetchedReviews = infiniteQuery.data.pages.flat();
      setReviews((prev) => _.unionBy([...prev, ...allFetchedReviews], "reviewId"));
    }
  }, [infiniteQuery.data]);

  return {
    reviews,
    ...infiniteQuery,
  };
}
