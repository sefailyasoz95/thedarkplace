export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
	public: {
		Tables: {
			posts: {
				Row: {
					created_at: string;
					id: string;
					isUpdated: boolean;
					likes: number;
					reposts: number;
					text: string;
					userId: string;
				};
				Insert: {
					created_at?: string;
					id?: string;
					isUpdated?: boolean;
					likes?: number;
					reposts?: number;
					text?: string;
					userId?: string;
				};
				Update: {
					created_at?: string;
					id?: string;
					isUpdated?: boolean;
					likes?: number;
					reposts?: number;
					text?: string;
					userId?: string;
				};
				Relationships: [];
			};
			users: {
				Row: {
					created_at: string | null;
					display_name: string | null;
					email: string | null;
					id: string;
					image_url: string | null;
					role: string | null;
					stripe_customer_id: string | null;
					stripe_subscription_id: string | null;
					subscription_status: boolean | null;
				};
				Insert: {
					created_at?: string | null;
					display_name?: string | null;
					email?: string | null;
					id: string;
					image_url?: string | null;
					role?: string | null;
					stripe_customer_id?: string | null;
					stripe_subscription_id?: string | null;
					subscription_status?: boolean | null;
				};
				Update: {
					created_at?: string | null;
					display_name?: string | null;
					email?: string | null;
					id?: string;
					image_url?: string | null;
					role?: string | null;
					stripe_customer_id?: string | null;
					stripe_subscription_id?: string | null;
					subscription_status?: boolean | null;
				};
				Relationships: [
					{
						foreignKeyName: "users_id_fkey";
						columns: ["id"];
						isOneToOne: true;
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (Database["public"]["Tables"] & Database["public"]["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
	  }
		? R
		: never
	: PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] & Database["public"]["Views"])
	? (Database["public"]["Tables"] & Database["public"]["Views"])[PublicTableNameOrOptions] extends {
			Row: infer R;
	  }
		? R
		: never
	: never;

export type TablesInsert<
	PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
	  }
		? I
		: never
	: PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
	? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
			Insert: infer I;
	  }
		? I
		: never
	: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
	  }
		? U
		: never
	: PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
	? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
			Update: infer U;
	  }
		? U
		: never
	: never;

export type Enums<
	PublicEnumNameOrOptions extends keyof Database["public"]["Enums"] | { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
	? Database["public"]["Enums"][PublicEnumNameOrOptions]
	: never;

export type Post = {
	text: string;
	created_at: string;
	isUpdated: boolean;
	likes: number;
	reposts: number;
	users: {
		email: string | null;
		display_name: string | null;
	};
};
