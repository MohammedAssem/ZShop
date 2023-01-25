namespace ZShop.Api.Entities
{
    public class TrackedEntity : BaseEntity
    {
        public string UpdatedUserID { get; set; }
        public string UpdatedDate { get; set; }
        public string CreatedUserID { get; set; }
        public string CreatedDate { get; set; }
    }
}
