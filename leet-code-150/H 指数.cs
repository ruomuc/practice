// https://leetcode.cn/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150

public class Solution {
    public int HIndex(int[] citations) {
        Array.Sort(citations);
		int n = citations.Length;
		int l = 1;
		int r = n;
		while (l < r)
		{
			int mid = (l + r) / 2;
			if (citations[n - mid] <= mid)
			{
				r = mid;
			}
			else
			{
				l = mid + 1;
			}
		}
		return citations[n - l] >= l ? l : l - 1 ;
    }
}